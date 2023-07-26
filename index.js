const Box = (props) => {
  //  Write your code here.
  const { box, message } = props;
  return (
    <div className={`main-box-container ${box}`}>
      <p className="paragraph">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="bg-container">
    <div className="sub-container">
      <h1 className="heading">Boxes</h1>
      <div className="box-container">
        <Box box="box-container1" message="Small" />
        <Box box="box-container2" message="Medium" />
        <Box box="box-container3" message="Large" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
