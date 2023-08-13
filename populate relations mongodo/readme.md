covers:
what is  populate in mongodb

post:/staff/create

{
    "name":"Sumit",
    "email":"Sumit@gmail.com"
}

post:/rights/create
{
    "staff_id":"64d8a1a5e980d4a924b7806d",
    "rights":"House Keeper"
}
post:/rights/populate
{
    "rights_id":"64d8a21ae980d4a924b7806f",
    "name":"Sahil"
   
}
