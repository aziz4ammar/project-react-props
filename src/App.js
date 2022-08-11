import Voiture from "./component/voiture/Voiture";
function App() {
  const cars=[
    {
      brand:"mercedes brabus 800",
      price:"367.199$",
      image:"https://cdn.motor1.com/images/mgl/6WGPb/s3/brabus-800-widestar.jpg"
    },
    {
      brand:"lamborghini aventador",
      price:"410.000$",
      image:"https://sasatimes.com/wp-content/uploads/2022/05/Lamborghini-Aventador-LP-780-4-Ultimae-in-the-quiz-Goodbye-to.jpg"
    },
    {
      brand:"bugatti chiron",
      price:"6.8m $",
      image:"https://www.motorshow.me/uploadImages/DocumentImages/Doc-P-114985-2637576357239567903.jpg"
    }



  ];
const handlePrice=(brand,price)=>alert(`${brand} costs ${price}`)



  return (
    <div className="App">
      <Voiture car={cars} handlePrice={handlePrice} />

    </div>
  );
}

export default App;