import book from "@/models/book";
import order from "@/models/order";

const handler = async (req, res) => {
    var body = req.body
    console.log(req.body)
    var newOrder = new order({
        book: body.id,
        dateRentOut: Date.now(),
        bookName: body.book,
        days: body.noOfDays,
        address: body.address,
        delivered: false,
        returned: false
    })
    await newOrder.save()

    let bookO = await book.findOne({_id: body.id})
    bookO.inStock = false;
    await bookO.save();
    
    res.status(200).json(newOrder)

}

export default handler;