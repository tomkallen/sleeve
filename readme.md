# sleeve

#### always have an ace up your sleeve
----
explore, search for and read Javascript object nested properties without many a nasty error

##### Installation:
`npm install --save sleeve`

##### Usage:
`const sleeve = require('sleeve');`

##### Syntax:
`sleeve(object, "chain.of.properties", fallbackValue)`
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

###### not okay:
`const email = user && user.contacts && user.contacts.email && user.contacts.email.primaryEmail ? user.contacts.email.primaryEmail : "no email provided"`   
###### okay:
_fallbacks:_
`const email = sleeve(user, "contacts.email.primaryEmail", "no email provided")`   
`console.log(email)  // "no email provided"`   

_property checking:_
```
let countryCode;
if (!sleeve(user, "location.country.code")) {
    countryCode = "US";
}
```

_reading value:_

`console.log(sleeve(user, "data.a.b.c.going.too.deep")) // null`
