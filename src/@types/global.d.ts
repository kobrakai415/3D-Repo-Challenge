interface Name {
  title: string;
  first: string;
  last: string;
}

interface Dob {
  date: string;
  age: number;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

interface Login {
  uuid: string;
  username: string;
}

interface UserLocation {
  city: string;
  country: string;
  timezone: {
    offset: string;
  };

}
interface User {
  name: Name;
  dob: Dob;
  location: UserLocation;
  login: Login;
  email: string;
  picture: Picture;
}
