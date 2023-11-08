

const Accordian = () => {
    return (
        <div className="lg:px-20 mt-14">
            <div className="collapse  collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
    What is the duration a user can borrow a book?
  </div>
  <div className="collapse-content"> 
    <p>A use can borrow books for 15 days.</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Can a use borrow books for any time in 24 hrs?
  </div>
  <div className="collapse-content"> 
    <p>Yes, A User can borrow books any time</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" /> 
  <div className="collapse-title text-xl font-medium">
    Is there any punishment for not returning books on time?
  </div>
  <div className="collapse-content"> 
    <p>Yes, First 15 date a user will pay for 20 tk and after that 50 tk per day.</p>
  </div>
</div>
        </div>
    );
};

export default Accordian;