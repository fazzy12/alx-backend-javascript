// Define MajorCredits interface
interface MajorCredits {
    credits: number;
    _brand: "major";
  }

  // Define MinorCredits interface
  interface MinorCredits {
    credits: number;
    _brand: "minor";
  }

  // Function to sum MajorCredits
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      _brand: "major",
    };
  }

  // Function to sum MinorCredits
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
      _brand: "minor",
    };
  }
