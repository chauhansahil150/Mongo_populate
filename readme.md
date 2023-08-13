covers:
what is path and match and use in populate

post:/staff/create

{
    "name":"Sumit",
    "email":"Sumit@gmail.com"
}

post:/rights/create
{
    "staff_id":["64d89f73e980d4a924b78057", "64d89fd3e980d4a924b7805e", "64d8a188e980d4a924b7806b", "64d8a1a5e980d4a924b7806d"],
    "rights":"House Keeper"
}
post:/rights/populate
{
    "rights_id":"64d8a21ae980d4a924b7806f",
    "name":"Sahil"
   
}
