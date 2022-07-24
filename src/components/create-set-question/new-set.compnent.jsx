const NewSet = () => {
  return (
    <form>
      <div class="mb-3">
        <label for="subject" class="form-label">
          Email address
        </label>
        <input
          type="text"
          class="form-control"
          id="subject"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" class="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>

      <div class="mb-3">
        <label for="questionType" class="form-label">
          QuestionType
        </label>
        <input
          type="text"
          class="form-control"
          id="questionType"
        />
      </div>
      <div class="mb-3">
        <label for="time" class="form-label">
          Total Time
        </label>
        <input
          type="number"
          class="form-control"
          id="time"
        />
      </div>
      <div class="mb-3">
        <label for="totalScore" class="form-label">
          Total Score
        </label>
        <input
          type="number"
          class="form-control"
          id="time"
        />
      </div>

      <div class="mb-3">
        <label for="set" class="form-label">
          Set No.
        </label>
        <input
          type="number"
          class="form-control"
          id="set"
        />
      </div>


      <div class="mb-3">
        <label for="setTitle" class="form-label">
          Set Title
        </label>
        <input
          type="text"
          class="form-control"
          id="setTitle"
        />
      </div>
           
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  );
};
