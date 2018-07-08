# sleeve

#### always have an ace up your sleeve
----
explore, search for and read Javascript object nested properties without many a nasty error   
[![npm version](https://badge.fury.io/js/sleeve.svg)](https://badge.fury.io/js/sleeve)

##### Installation:
`npm install --save sleeve`

##### Usage:
`const s = require('sleeve');`

##### Syntax:
`s(object, "chain.of.properties.that.can.be.rather.long", fallbackValue)`  

##### Examples:

```
const user = {
    name: "John",
    login: "jjohanson",
    contacts: {
        phoneNumber: "(555)834-1337"
    },
    location:{},
    data: {
        a:{
            b: ""
        }
    }
};
```   

##### not okay:   
```
const email = user && user.contacts && user.contacts.email && user.contacts.email.primaryEmail ? user.contacts.email.primaryEmail : "no email provided";
```   

##### okay:   
_fallbacks:_  
```
const email = s(user, "contacts.email.primaryEmail", "no email provided");
console.log(email);  // "no email provided"
```   

_property checking:_   
```
let countryCode;
if (!s(user, "location.country.code")) {
    countryCode = "US";
}
```   

_reading value:_   
```
console.log(s(user, "data.a.b.c.going.too.deep")); // null
```   

_callback function:_   
```
s(user, "i.do.not.know.where.to.go", () => console.log("this is a fail"));
```   
