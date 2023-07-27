
const obj  = {
    name: "John Doe",
    age: 30,
    contact: {
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
      },
    },
    interests: ["programming", "reading", "traveling"],
    education: {
      university: "Example University",
      degrees: [
        {
          degreeName: "Bachelor of Science",
          major: "Computer Science",
          year: 2015,
        },
        {
          degreeName: "Master of Business Administration",
          major: "Marketing",
          year: 2018,
        },
      ],
    },
    friends: [
      {
        name: "Alice",
        age: 28,
        contact: {
          email: "alice@example.com",
          phone: "+1 (555) 987-6543",
        },
      },
      {
        name: "Bob",
        age: 32,
        contact: {
          email: "bob@example.com",
          phone: "+1 (555) 567-8901",
        },
      },
    ],
  }
  

async function deepCopyObject(obj) {
    if (typeof obj !== 'object' || obj === null) {
      throw new Error('Argument is not an object');
    }
  
    if (Array.isArray(obj)) {
      const copiedArray = [];
      for (const value of obj) {
        if (typeof value === 'object' && value !== null) {
          copiedArray.push(await deepCopyObject(value));
        } else {
          copiedArray.push(value);
        }
      }
      return copiedArray;
    }
  
    const copiedObject = {};
  
    const keys = Object.keys(obj);
  
    for (const key of keys) {
      const value = obj[key];
  
      if (typeof value === 'object' && value !== null) {
        copiedObject[key] = await deepCopyObject(value);
      } else {
        copiedObject[key] = value;
      }
    }
  
    return copiedObject;
  }
  
  (async () => {
    try {
      const sourceObject = {
        name: "John Doe",
    age: 30,
    contact: {
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      address: {
        street: "123 Main St",
        city: "New York",
        state: "NY",
        zipCode: "10001",
      },
    },
    interests: ["programming", "reading", "traveling"],
    education: {
      university: "Example University",
      degrees: [
        {
          degreeName: "Bachelor of Science",
          major: "Computer Science",
          year: 2015,
        },
        {
          degreeName: "Master of Business Administration",
          major: "Marketing",
          year: 2018,
        },
      ],
    },
    friends: [
      {
        name: "Alice",
        age: 28,
        contact: {
          email: "alice@example.com",
          phone: "+1 (555) 987-6543",
        },
      },
      {
        name: "Bob",
        age: 32,
        contact: {
          email: "bob@example.com",
          phone: "+1 (555) 567-8901",
        },
      },
    ],
      };
  
      if(Array.isArray(sourceObject)){
        throw new Error('Argument is not an object');
      }else{
        const copiedObject = await deepCopyObject(sourceObject);
        console.log(copiedObject)
      }
    } catch (error) {
      console.error('Error:', error.message);
    }
  })();