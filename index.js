// 1. mongosh
// to connect to mongoshell
// 2. show dbs
// to see all dbs
// 3. use dbname 
// to switch dbs
// 4. show collections
// to view all collections
db.projects.instertMany(
    [
        {
          _id: ObjectId("63934070c0adb53d4906cd48"),
          id: '1',
          product_name: 'Intelligent Fresh Chips',
          product_price: 655,
          product_material: 'Concrete',
          product_color: 'mint green'
        },
        {
          _id: ObjectId("63934070c0adb53d4906cd49"),
          id: '2',
          product_name: 'Practical Fresh Sausages',
          product_price: 911,
          product_material: 'Cotton',
          product_color: 'indigo'
        },
        {
          _id: ObjectId("63934070c0adb53d4906cd4a"),
          id: '3',
          product_name: 'Refined Steel Car',
          product_price: 690,
          product_material: 'Rubber',
          product_color: 'gold'
        },
        {
          _id: ObjectId("63934070c0adb53d4906cd4b"),
          id: '4',
          product_name: 'Gorgeous Plastic Pants',
          product_price: 492,
          product_material: 'Soft',
          product_color: 'plum'
        },
        {
          _id: ObjectId("63934070c0adb53d4906cd4c"),
          id: '5',
          product_name: 'Sleek Cotton Chair',
          product_price: 33,
          product_material: 'Fresh',
          product_color: 'black'
        },
        {
          _id: ObjectId("63934070c0adb53d4906cd4d"),
          id: '6',
          product_name: 'Awesome Wooden Towels',
          product_price: 474,
          product_material: 'Plastic',
          product_color: 'orange'
        },
        {
          _id: ObjectId("63934070c0adb53d4906cd4e"),
          id: '7',
          product_name: 'Practical Soft Shoes',
          product_price: 500,
          product_material: 'Rubber',
          product_color: 'pink'
        },
        {
          _id: ObjectId("63934070c0adb53d4906cd4f"),
          id: '8',
          product_name: 'Incredible Steel Hat',
          product_price: 78,
          product_material: 'Rubber',
          product_color: 'violet'
        },
        {
          _id: ObjectId("63934070c0adb53d4906cd50"),
          id: '9',
          product_name: 'Awesome Wooden Ball',
          product_price: 28,
          product_material: 'Soft',
          product_color: 'azure'
        },
        {
          _id: ObjectId("63934070c0adb53d4906cd51"),
          id: '10',
          product_name: 'Generic Wooden Pizza',
          product_price: 84,
          product_material: 'Frozen',
          product_color: 'indigo'
        },
        {
          _id: ObjectId("63934070c0adb53d4906cd52"),
          id: '11',
          product_name: 'Unbranded Wooden Cheese',
          product_price: 26,
          product_material: 'Soft',
          product_color: 'black'
        },
        {
          _id: ObjectId("63934070c0adb53d4906cd53"),
          id: '12',
          product_name: 'Unbranded Plastic Salad',
          product_price: 89,
          product_material: 'Wooden',
          product_color: 'pink'
        },
        {
          _id: ObjectId("63934070c0adb53d4906cd54"),
          id: '13',
          product_name: 'Gorgeous Cotton Keyboard',
          product_price: 37,
          product_material: 'Concrete',
          product_color: 'sky blue'
        },
        {
          _id: ObjectId("63934070c0adb53d4906cd55"),
          id: '14',
          product_name: 'Incredible Steel Shirt',
          product_price: 54,
          product_material: 'Metal',
          product_color: 'white'
        },
        {
          _id: ObjectId("63934070c0adb53d4906cd56"),
          id: '15',
          product_name: 'Ergonomic Cotton Hat',
          product_price: 43,
          product_material: 'Rubber',
          product_color: 'mint green'
        },
        {
          _id: ObjectId("63934070c0adb53d4906cd57"),
          id: '16',
          product_name: 'Small Soft Chair',
          product_price: 47,
          product_material: 'Cotton',
          product_color: 'teal'
        },
        {
          _id: ObjectId("63934070c0adb53d4906cd58"),
          id: '17',
          product_name: 'Incredible Metal Car',
          product_price: 36,
          product_material: 'Fresh',
          product_color: 'indigo'
        },
        {
          _id: ObjectId("63934070c0adb53d4906cd59"),
          id: '18',
          product_name: 'Licensed Plastic Bacon',
          product_price: 88,
          product_material: 'Steel',
          product_color: 'yellow'
        },
        {
          _id: ObjectId("63934070c0adb53d4906cd5a"),
          id: '19',
          product_name: 'Intelligent Cotton Chips',
          product_price: 46,
          product_material: 'Soft',
          product_color: 'azure'
        },
        {
          _id: ObjectId("63934070c0adb53d4906cd5b"),
          id: '20',
          product_name: 'Handcrafted Wooden Bacon',
          product_price: 36,
          product_material: 'Concrete',
          product_color: 'lime'
        }
      ]
)
// to insert data into the collection


TASKQUESTIONS
// 1. Find all the information about each products, returns all the info
db.projects.find({})

// 2. Find the product price which are between 400 to 800
db.projects.find({product_price:{$gt:400,$lt:800}})

// 3. Find the product price which are not between 400 to 600
db.projects.find({product_price:{$not:{$gt:400,$lt:600}}})

// 4. List the four product which are grater than 500 in price
db.projects.find({product_price:{$gt:500}}).limit(4)

// 5. Find the product name and product material of each products
db.projects.find({}, {product_name:1,product_material:1}).toArray()

// 6. Find the product with a row id of 10
db.projects.find({id:"10"})

// 7. Find only the product name and product material
db.projects.find({}, {product_name:1,product_material:1}).toArray()

// 8. Find all products which contain the value of soft in product material 
db.projects.find({product_material:"Soft"}).toArray()

// 9. Find products which contain product color indigo  and product price 492.00
db.projects.find({product_color:"indigo", product_price:492}).toArray() 

// 10. Delete the products which product price value are same
db.projects.deleteOne({product_price: {$eq:36}})