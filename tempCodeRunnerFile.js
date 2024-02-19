
// Select the database to use.
use('sigmaDatabase');

// Insert a few documents into the sales collection.
db.getCollection('coursess').insertMany([
   
        {
          "_id": { "$oid": "65a57c766a1a09d9f90de32b" },
          "name": "Sahil Sinha",
          "courses": "Mca"
        },
        {
          "_id": { "$oid": "65a57c766a1a09d9f90de32c" },
          "name": "John Smith",
          "courses": "Computer Science"
        },
        {
          "_id": { "$oid": "65a57c766a1a09d9f90de32d" },
          "name": "Alice Johnson",
          "courses": "Mathematics"
        },
        {
          "_id": { "$oid": "65a57c766a1a09d9f90de32e" },
          "name": "Bob Williams",
          "courses": "Physics"
        },
        {
          "_id": { "$oid": "65a57c766a1a09d9f90de32f" },
          "name": "Eva Davis",
          "courses": "Chemistry"
        },
        {
          "_id": { "$oid": "65a57c766a1a09d9f90de330" },
          "name": "Alex Turner",
          "courses": "Biology"
        },
        {
          "_id": { "$oid": "65a57c766a1a09d9f90de331" },
          "name": "Sophia Miller",
          "courses": "Environmental Science"
        },
        {
          "_id": { "$oid": "65a57c766a1a09d9f90de332" },
          "name": "David Brown",
          "courses": "Geology"
        },
        {
          "_id": { "$oid": "65a57c766a1a09d9f90de333" },
          "name": "Mia Wilson",
          "courses": "Economics"
        },
        {
          "_id": { "$oid": "65a57c766a1a09d9f90de334" },
          "name": "Ryan Garcia",
          "courses": "Business Administration"
        }
   
      
]);

// Print a message to the output window.
console.log("updated a document");

// Here we run an aggregation and open a cursor to the results.
// Use '.toArray()' to exhaust the cursor to return the whole result set.
// You can use '.hasNext()/.next()' to iterate through the cursor page by page.

