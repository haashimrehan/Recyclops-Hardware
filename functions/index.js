const functions = require("firebase-functions");
const test = require("@trycourier/courier");
const courier = test.CourierClient({authorizationToken: "dk_prod_Q2JZ8079R94K0JK9QA90D7330DQA"});

async function start() {
    const { messageId } = await courier.send({
      eventId: "CJ7T3HVGK8447FK7N56C72C82S0H",
      recipientId: "48a6cfc1-33ef-4f04-9ce4-c740377f4c4a",//"50db4b84-c62e-4683-8c5a-e1e6a7830087",
      profile: {
      firebaseToken: "dNqqdwRXQmyk5DdavVaBCE:APA91bHXhTXcXZcffn3GNh2sZymDe4oMaBKTy0LW2PntDTFLirDFHkBnyhVVD_25eSBWy4v1GsMtGJKFFhfEygB1Nq50EmvqrU_ZrZeazsOc6YiJPkBGDsjE_piSvinw5It7eZqrdFJQ"
      //"d-O9YJ06TCeJlfE0GceOS7:APA91bEp98h33Ib834o07s6Yw68sI2g4q2kaq6ITdXzAxG-U4bftrOPnLKNLHs_bxGHRgRziEjgu9iJ6KKIc1xY1F8h22cXGHsY4g9YFvnKY44UmgNoMlQFg5OfUWJ89-bNdXD8wpFUx",
      },
      data: {
      dataForPushMessage: true,
      },
      override: {
      },
      });
  }


exports.sendAlert = functions.database.ref('/jimmyyan1337/Alert')
    .onUpdate((snapshot, context) => {
      // Grab the current value of what was written to the Realtime Database.
      const original = snapshot.after.val(); // before val after val
      if (original == true){
        start()
        return snapshot.after.ref.parent.child('Alert').set('false');
        functions.logger.log('Sending Notification to Jimmy Yan', context.params.pushId, original);
      } else {
        functions.logger.log('Alert is False', context.params.pushId, original);
      }

      //const uppercase = original.toUpperCase();
      // You must return a Promise when performing asynchronous tasks inside a Functions such as
      // writing to the Firebase Realtime Database.
      // Setting an "uppercase" sibling in the Realtime Database returns a Promise.
      // Example: send a message supporting email & SMS
       // start(); // function that sends the notification
      //return snapshot.after.ref.parent.child('uppercase').set(uppercase);
});

    


