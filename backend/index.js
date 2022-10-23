require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());

app.post("/pay", async (req, res) => {
  try {
    const amount = 9000; // lowest denomination
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "inr",
      payment_method_types: ["card"],
      metadata: {
        name: "value",
      },
    });
    const clientSecret = paymentIntent.client_secret;
    res.json({ clientSecret, message: "Payment Initiated" });
//******************************** */
    // paymentIntent = await stripe.paymentIntents.create(
    //   "pi_3LEZcoC8JdJ1bZOw1rIpNu95"
    // );
    // res.json({ message: paymentIntent }); 
    //************************* */
    // let amount = 7000;
    //     let paymentInfo = await stripe.paymentIntents.create({
    //       payment_method: "pm_1LEXqoC8JdJ1bZOwSlNcwrrv",
    //       amount: 13767,
    //       currency: "EUR",
    //       confirmation_method: "manual",
    //       confirm: true,
    //     });

    //     res.json({ message: paymentInfo });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// app.post("/stripe", (req, res) => {
//   console.log("req.body.type", req.body.type)
//   if (req.body.type === "payment_intent.created") {
//     console.log(`${req.body.data.object.metadata.name} initated payment!`);
//   }
//   if (req.body.type === "payment_intent.succeeded") {
//     console.log(`${req.body.data.object.metadata.name} succeeded payment!`);
//   }
// });
 
app.listen(5000, () => console.log(`Server running on port 5000`));
