function DisplayProducts(){
 const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        Toggle
      </button>
      {isOpen && <p>Content</p>}
    </div>
  );
}

export default DisplayProducts