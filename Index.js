const express=require('express')
const app=express();
const PORT= 8000;
app.listen(PORT,console.log(`server statred at port ${PORT}`));
app.use(express.json());
function convertToLowercase(arr) {
  const lowercaseArray = arr.map((entry) => entry.toLowerCase());
  return lowercaseArray;
}
app.post("/api/SortNames",(req,res)=>{
    if (!req.body || !Array.isArray(req.body.names)) {
        return res.status(400).json({ error: 'The Array is required ' });
      }
    let data = req.body.names;
    const newdata=convertToLowercase(data);
    console.log(newdata);
    const sortedNames = newdata.sort();
    return res.json({ "Sorted Names":sortedNames });

})