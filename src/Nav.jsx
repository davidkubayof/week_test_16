const Nav = ({ handleInputChange, AttacksCount ,handleInputChangeStatus ,handleMostDangerou}) => {
  return (
    <>
      <nav className="space-x-5 space-y-5 ml-4">
        <input
          className="border"
          type="text"
          onChange={handleInputChange}
          placeholder="🔍 Search by Name"
        />
        <input
          className="border"
          type="number"
          onChange={AttacksCount}
          placeholder="Search by Attacks"
        />
        <select  onChange={handleInputChangeStatus} className="border">
          <option value="">--Please choose an status--</option>
          <option value="active">Active</option>
          <option value="quiet">Quiet</option>
          <option value="dead">Dead</option>
          <option value="israeli_Agent">Israeli Agent</option>
        </select>
        <button onClick={handleMostDangerou}  className="border hover:bg-amber-200">Find Most dangerous</button>
      </nav>
    </>
  );
};

export default Nav;
