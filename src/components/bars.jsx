const Bar1 = () => {
  return (
    <div>
      <h1>I am Bar 1</h1>
    </div>
  );
};

const Bar2 = () => {
  return <h1>I am Bar 2</h1>;
};

const MyCatsAge = ({ age, likes }) => {
  console.log(likes);
  return <span>Kelly age: {age}</span>;
};

const MyCatsAge2 = (prop) => {
  console.log(prop.likes);
  return <span>Kelly age: {prop.age}</span>;
};

export { Bar1, Bar2, MyCatsAge };
