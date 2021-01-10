import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AgoraClient, ClientEvent, NgxAgoraService, Stream, StreamEvent } from 'ngx-agora';
import { environment } from 'src/environments/environment';
import { AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import { AuthenticationService } from '../services/authentication.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators'

interface product {
  title:string, 
  price: string, 
  image_url: string, 
  category: string, 
  link: string
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  private localStream: Stream;
  private client: AgoraClient;
  showJoinButton = true;
  showLeaveButton = false;
  /**
   * App ID used when connecting to the Agora.io servers
   */
  appId: FormControl = new FormControl((environment as any).agora ? (environment as any).agora.appId : '');
  /**
   * Channel (meeting room) within the Agora app to join
   */
  channel = new FormControl('123');
  /**
   * Generated user ID that is attached to the local client when joining a meeting room
   */
  uid: number;

  /**
   * All the IDs of other users that have joined the call
   */
  remoteCalls: string[] = [];
  /**
   * Whether the local client has tuned in to the Agora meeting room
   */
  connected = false;
  /**
   * Whether the local client's A/V stream has been published to the remote meeting room
   */
  published = false;

  user_uid;
  list_of_recommended_products_ids;
  list_of_recommended_products = [];
  product_ref
  constructor(private authenticationService: AuthenticationService, private agoraService: NgxAgoraService, private firestore: AngularFirestore) {
    this.user_uid = this.authenticationService.user_uid;
  

    
      // firestore.doc('Users/'+this.user_uid).get().subscribe(snapshot => {
      //   this.list_of_recommended_products_ids = snapshot.data().recommended_products
      //   this.list_of_recommended_products_ids.forEach(product_id => {
      //     console.log("product Id" + product_id )
      //     this.retrieve_product_info(product_id)
      //   })
      // })
      

      firestore.doc('Users/'+this.user_uid).snapshotChanges().subscribe(snapshot => {
        console.log('we are liveee')
        this.list_of_recommended_products = []
        this.list_of_recommended_products_ids = snapshot.payload.data()['recommended_products']
        this.list_of_recommended_products_ids.forEach(product_id => {
          console.log("product Id" + product_id )
          this.list_of_recommended_products.push(this.retrieve_product_info(product_id))
        })

      })
      
    
    


    this.uid = Math.floor(Math.random() * 100);

    this.client = this.agoraService.createClient({ mode: 'live', codec: 'h264' });
    this.assignClientHandlers();
  }
  retrieve_product_info(id) {
    var product = { title: "", 
                    category: "", 
                    price: "", 
                    image_url: "",
                    link: ""}
  var ref = this.firestore.doc('Products/'+id).get().subscribe(snapshot => {
    if(snapshot.data().title) {
      product.title = snapshot.data().title
    }
    if(snapshot.data().category) {
      product.category = snapshot.data().category
    }
    if(snapshot.data().price) {
      product.price = snapshot.data().price
    }

    if(snapshot.data().image_url) {
      product.image_url = snapshot.data().image_url
    }
    if(snapshot.data().link) {
      product.link = snapshot.data().link
    }

    
    // console.log(snapshot + "stringify")
      // product = { title: snapshot.data().title, 
                    // category: snapshot.data().category, 
                    // price:snapshot.data().price, 
                    // image_url: snapshot.data().image_url
    
    
    // }
    console.log(product.title + "title")
    console.log(product.image_url + "image_url")

    console.log(product.price + "price")

    console.log(product.category + "category")


  })
  return product
  }
  ngOnInit() {
    this.client.init(this.appId.value, () => console.log('Initialized successfully'), () => console.log('Could not initialize'));
  }

  join(): void {
    this.localStream = this.agoraService.createStream({ streamID: this.uid, audio: true, video: true, screen: false });
    this.assignLocalStreamHandlers();
    this.init();

    this.client.join(null, this.channel.value, this.uid)
    setTimeout(() => { 
      this.publish()
    }
      , 2000);
  }

  publish(): void {
    this.client.publish(this.localStream, err => console.log('Publish local stream error: ' + err));
  }

  unpublish(): void {
    this.client.unpublish(this.localStream, error => console.error(error));
    this.published = false;
  }

  leave(): void {
    if (this.connected) {
      this.client.leave(
        () => {
          console.log('Left the channel successfully');
          this.connected = false;
          this.published = false;
          this.remoteCalls = [];
        },
        err => {
          console.log('Leave channel failed');
        }
      );
    } else {
      this.agoraService.AgoraRTC.Logger.warning('Local client is not connected to channel.');
    }
  }

  protected init(): void {
    this.localStream.init(
      () => {
        // The user has granted access to the camera and mic.
        console.log('getUserMedia successfully');
        this.localStream.play('agora_local');
        this.connected = true;
      },
      err => console.log('getUserMedia failed', err)
    );
  }

  private assignLocalStreamHandlers(): void {
    this.localStream.on(StreamEvent.MediaAccessAllowed, () => {
      console.log('accessAllowed');
    });
    // The user has denied access to the camera and mic.
    this.localStream.on(StreamEvent.MediaAccessDenied, () => {
      console.log('accessDenied');
    });
  }

  private assignClientHandlers(): void {
    this.client.on(ClientEvent.LocalStreamPublished, evt => {
      this.published = true;
      console.log('Publish local stream successfully');
    });

    this.client.on(ClientEvent.Error, error => {
      console.log('Got error msg:', error.reason);
      if (error.reason === 'DYNAMIC_KEY_TIMEOUT') {
        this.client.renewChannelKey(
          '',
          () => console.log('Renewed the channel key successfully.'),
          renewError => console.error('Renew channel key failed: ', renewError)
        );
      }
    });

    this.client.on(ClientEvent.RemoteStreamAdded, evt => {
      const stream = evt.stream as Stream;
      this.client.subscribe(stream, { audio: true, video: true }, err => {
        console.log('Subscribe stream failed', err);
      });
    });

    this.client.on(ClientEvent.RemoteStreamSubscribed, evt => {
      const stream = evt.stream as Stream;
      const id = this.getRemoteId(stream);
      if (!this.remoteCalls.length) {
        this.remoteCalls.push(id);
        setTimeout(() => stream.play(id), 1000);
      }
    });

    this.client.on(ClientEvent.RemoteStreamRemoved, evt => {
      const stream = evt.stream as Stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = [];
        console.log(`Remote stream is removed ${stream.getId()}`);
      }
    });

    this.client.on(ClientEvent.PeerLeave, evt => {
      const stream = evt.stream as Stream;
      if (stream) {
        stream.stop();
        this.remoteCalls = this.remoteCalls.filter(call => call !== `${this.getRemoteId(stream)}`);
        console.log(`${evt.uid} left from this channel`);
      }
    });
  }

  private getRemoteId(stream: Stream): string {
    return `agora_remote-${stream.getId()}`;
  }

}
