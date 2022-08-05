export class Friend {
  _firstName: string | null
  _lastName: string | null
  _email: string | null
  _phoneNumber: number | null
  _favouriteLanguage: string | null


  constructor(firstName: string | null, lastName: string | null, email: string | null, phoneNumber: number | null, favouriteLanguage: string | null) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._email = email;
    this._phoneNumber = phoneNumber;
    this._favouriteLanguage = favouriteLanguage;
  }
}
