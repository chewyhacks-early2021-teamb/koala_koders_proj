import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { AgoraClient, ClientEvent, NgxAgoraService, Stream, StreamEvent } from 'ngx-agora';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
import { firestore } from 'firebase/app';
@Component({
  selector: 'app-pharm',
  templateUrl: './pharm.component.html',
  styleUrls: ['./pharm.component.css']
})
export class PharmComponent implements OnInit {
  showRec = false;
  rec_text = "Show Recommend View"
  private localStream: Stream;
  private client: AgoraClient;
  styling ;
  showJoinButton = true;
  showLeaveButton = false;
  reccomendItem() {
    if(this.showRec == false) {
      this.rec_text = "Hide Recommend View"
      this.styling = {    "display": "flex",
      "flex-direction": "column",
      "flex-wrap": "wrap",
      "height": "700px",
      "width": "100%",
      "padding": "5px"
      }
    } else {
    
      this.styling = {    "display": "flex",
    "flex-direction": "row",
    "flex-wrap": "wrap",
    "height": "700px",
    "width": "100%",
    "padding": "5px",
    "justify-content": "center"}
      this.rec_text = "Show Recommend View"
    }
    this.showRec = !this.showRec;
   
  }
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
  productLink = "78972";
  userID = "nm2h0kyxsYTs4Id9tRl01PTwkUW2"
  list_of_products_ids;
  list_of_products = [];
  list_of_managed_products = [];
  constructor(private agoraService: NgxAgoraService, private firestore: AngularFirestore) {
    this.uid = Math.floor(Math.random() * 100);

    firestore.collection('Products').get().forEach(cols => {
      cols.docs.forEach(snapshot => {
        this.list_of_products.push(this.retrieve_product_info(snapshot, snapshot.id))

      })

      
    })
    
    // subscribe(snapshot => {
    //   this.list_of_products_ids = snapshot.data()
    //   this.list_of_recommended_products_ids.forEach(product_id => {
    //     console.log("product Id" + product_id )
    //     this.list_of_products.push(this.retrieve_product_info(product_id))
    //   })

    // })
    this.client = this.agoraService.createClient({ mode: 'live', codec: 'h264' });
    this.assignClientHandlers();
  }

  recommendProduct(product_id, product) {
    var ref = this.firestore.collection('Users').doc(this.userID)
   
    ref.update({recommended_products: firestore.FieldValue.arrayUnion(product_id)})

    this.remove(product);
  }

  unrecommendProduct(product_id) {
    var ref = this.firestore.collection('Users').doc(this.userID)
   
    ref.update({recommended_products: firestore.FieldValue.arrayRemove(product_id)})

  }

  retrieve_product_info(snapshot, id) {
    var product = { title: "", 
                    category: "", 
                    price: "", 
                    image_url: "",
                    link: "",
                    id: id}
  
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
   
  return product
  }

  ngOnInit() {
    this.styling = {    "display": "flex",
    "flex-direction": "row",
    "flex-wrap": "wrap",
    "height": "700px",
    "width": "100%",
    "padding": "5px",
    "justify-content": "center"}
    this.client.init(this.appId.value, () => console.log('Initialized successfully'), () => console.log('Could not initialize'));
  }

  join(): void {
    this.localStream = this.agoraService.createStream({ streamID: this.uid, audio: true, video: true, screen: false });
    this.showJoinButton = false;
    this.showLeaveButton = true;
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

  remove(item) {
    // var id = item.id
    const index = this.list_of_products.indexOf(item);
    this.list_of_managed_products.push(item);
    // const indexInID = this.list_of_products_ids.indexOf(id);

    if (index >= 0) {
      this.list_of_products.splice(index, 1);
    }

    // if(indexInID) {
    //   this.list_of_products_ids.splice(indexInID, 1);

    // }
    
  }

  undo_rec_item(item) {
    const index = this.list_of_managed_products.indexOf(item);
    this.list_of_products.push(item);
    if (index >= 0) {
      this.list_of_managed_products.splice(index, 1);
    }
    this.unrecommendProduct(item.id);

  }
}
