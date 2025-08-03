function Photos({ url1, url2 }) {
  return (
    <div className="images-container flex-center">
      <img className="image" src={url1} alt="Image hint one"></img>
      <img className="image" src={url2} alt="Image hint two"></img>
    </div>
  );
}

export default Photos;
