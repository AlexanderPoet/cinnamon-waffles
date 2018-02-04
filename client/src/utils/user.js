
export default (function () {
  const workouts = ['Back', 'Chest', 'Arms', 'Legs', 'Abs', 'Shoulders'] // examples
  const createUser = function() {};//async create a user return dope object of staties;
  return class {
    constructor(x) {
      this.queue = [];
      this.userInfo = createUser();
    }
    addWorkout(x) {
    }
    requestWorkout() {
      return {
        
      };
    }
  }
})();