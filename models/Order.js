const mongoose = require('mongoose');

const Address = new mongoose.Schema({
  namaJalan: {
    type: String,
    required: [true, 'The street name need to be defined'],
  },
  nomorRumah: {
    type: Number,
    required: [true, 'Harus mengisi nomor rumah'],
  },
  nomorRT: Number,
  nomorRW: Number,
  kelurahan: {
    type: String,
    required: [true, 'Harus mengisi kelurahan/desa'],
  },
  kecamatan: {
    type: String,
    required: [true, 'Harus mengisi kecamatan'],
  },
  kabupaten: {
    type: String,
    required: [true, 'Harus mengisi kabupaten/kota'],
  },
  kodePos: {
    type: Number,
    required: [true, 'Harus mengisi kode pos'],
  },
});

const Recipient = new mongoose.Schema({
  address: [Address],
  fullname: {
    type: String,
    required: [true, 'The fullname need to be defined'],
  },
  phone: {
    type: String,
    required: [true, 'The phone number need to be defined'],
  },
});

const Product = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
  },
  description: {
      type: String,
      required: false,
  },
  price: {
      type: String,
      required: [true, "Please add a price"],
  },
  image: {
      type: String,
      required: [true, "Please add a image"],
  }
});

const Item = new mongoose.Schema({
  product: [Product],
  quantity: {
    type: Number,
    required: [true, 'The quantity need to be defined'],
  }
});

const orderSchema = new mongoose.Schema({
  total: {
      type: Number,
      required: [true, "The total need to be defined"],
  },
  status: {
      type: String,
      required: [true, "The status need to be defined"],
  },
  items: [Item],
  delivery: [Recipient],
});

module.exports = mongoose.model("Order", orderSchema);