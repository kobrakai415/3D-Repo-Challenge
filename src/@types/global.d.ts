interface Name {
  title: string;
  first: string;
  last: string;
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
  timezone: {
    offset: string;
  };
}
interface User {
  name: Name;
  location: UserLocation;
  login: Login;
  email: string;
  picture: Picture;
}

