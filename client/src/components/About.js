function About({ emotional, setEmotional, job, setJob, submit }) {
  return (
    <form className="ml-40 mt-[110px]" onSubmit={(e) => submit(e)}>
      <h1 className="text-prim text-[35px] font-extrabold mb-3">About You</h1>
      <div className="mb-4 font-semibold">
        <input
          id="emotional"
          checked={emotional}
          onChange={() => setEmotional(!emotional)}
          type="checkbox"
          className="mr-2 h-[25px] w-[25px] align-middle"
        />
        <label htmlFor="emotional" className="align-middle">
          Are you an emotional person
        </label>
      </div>
      <div className="font-semibold flex flex-col max-w-[350px] mb-7">
        <label htmlFor="job" className="mb-2">
          What is your dream job
        </label>
        <select
          id="job"
          name="jobs"
          className="p-2 bg-seco"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        >
          <option value="comedian">Comedian</option>
          <option value="defense">Defense forces</option>
          <option value="investigator">Investigator</option>
        </select>
      </div>
      <button className="w-[200px] h-[50px] text-6 rounded-lg font-bold bg-seco">
        Submit
      </button>
    </form>
  );
}

export default About;
