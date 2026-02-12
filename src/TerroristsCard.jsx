const TerroristsCard = ({ users }) => {
  return (
    <>
      <div className="border bg-amber-200 ">
        {users.map((user) => (
          <div className="border " key={user.name}>
            <img
              src={user.imageUrl || "https://i.ibb.co/Hpf9JhhF/12.png"}
              alt=""
            />
            <h3>{user.name}</h3>
            <p>organization-{user.organization}</p>
            <p>attacksCount-{user.attacksCount}</p>
            <p>status-{user.status}</p>
            <p>relationToIsraelSummary-{user.relationToIsraelSummary}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default TerroristsCard;
