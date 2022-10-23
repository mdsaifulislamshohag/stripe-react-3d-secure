import "./App.css";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";

const stripePromise = loadStripe("pk_test_51LE30pC8JdJ1bZOwSQFXZQqCWcpiFY15aC1AbcwzjgNR6lTcfDpuX1hBeBiTJa4do5uOQkB7jEDLKjCa5c1kPqwJ00vrKUWZ28");

function App() {
  return (
    <div className="app">
      <Elements stripe={stripePromise}>
        <Checkout />
      </Elements>
    </div>
  );
}

export default App;
