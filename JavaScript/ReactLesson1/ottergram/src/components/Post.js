function Post({image, name, setSelectedPostName}){
    // const handleclick = (name) => {
    //   return console.log("You click on " + name);
    // }
    return(
    <li>
        <button onClick={() => setSelectedPostName(name)}>
          <img src={image} />
          <p>{name}</p>
        </button>
      </li>
    );
}
export default Post;