import * as ProductsRepository from "@modules/products/infra/typeorm/repositories/ProductsRepository"
// @ponicode
describe("create", () => {
    let inst: any

    beforeEach(() => {
        inst = new ProductsRepository.default()
    })

    test("0", async () => {
        await inst.create({ name: "Pierre Edouard", price: -100, quantity: 9876 })
    })

    test("1", async () => {
        await inst.create({ name: "Michael", price: 1, quantity: "bc23a9d531064583ace8f67dad60f6bb" })
    })

    test("2", async () => {
        await inst.create({ name: "Edmond", price: 1, quantity: 7588892 })
    })

    test("3", async () => {
        await inst.create({ name: "Edmond", price: 0, quantity: 7588892 })
    })

    test("4", async () => {
        await inst.create({ name: "Anas", price: 0, quantity: 9876 })
    })

    test("5", async () => {
        await inst.create({ name: "", price: Infinity, quantity: Infinity })
    })
})

// @ponicode
describe("findAllById", () => {
    let inst: any

    beforeEach(() => {
        inst = new ProductsRepository.default()
    })

    test("0", async () => {
        let param1: any = [{ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }]
        await inst.findAllById(param1)
    })

    test("1", async () => {
        let param1: any = [{ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }]
        await inst.findAllById(param1)
    })

    test("2", async () => {
        let param1: any = [{ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }]
        await inst.findAllById(param1)
    })

    test("3", async () => {
        let param1: any = [{ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9" }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }]
        await inst.findAllById(param1)
    })

    test("4", async () => {
        let param1: any = [{ id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8" }, { id: "a85a8e6b-348b-4011-a1ec-1e78e9620782" }]
        await inst.findAllById(param1)
    })

    test("5", async () => {
        await inst.findAllById([])
    })
})

// @ponicode
describe("updateQuantity", () => {
    let inst: any

    beforeEach(() => {
        inst = new ProductsRepository.default()
    })

    test("0", async () => {
        let param1: any = [{ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", quantity: "c466a48309794261b64a4f02cfcc3d64" }]
        await inst.updateQuantity(param1)
    })

    test("1", async () => {
        let param1: any = [{ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: "bc23a9d531064583ace8f67dad60f6bb" }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: 7588892 }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: 9876 }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: "bc23a9d531064583ace8f67dad60f6bb" }]
        await inst.updateQuantity(param1)
    })

    test("2", async () => {
        let param1: any = [{ id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: "c466a48309794261b64a4f02cfcc3d64" }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: 9876 }, { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", quantity: 12345 }, { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", quantity: 12345 }]
        await inst.updateQuantity(param1)
    })

    test("3", async () => {
        let param1: any = [{ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", quantity: "c466a48309794261b64a4f02cfcc3d64" }, { id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", quantity: 7588892 }, { id: "7289708e-b17a-477c-8a77-9ab575c4b4d8", quantity: "bc23a9d531064583ace8f67dad60f6bb" }]
        await inst.updateQuantity(param1)
    })

    test("4", async () => {
        let param1: any = [{ id: "03ea49f8-1d96-4cd0-b279-0684e3eec3a9", quantity: "bc23a9d531064583ace8f67dad60f6bb" }]
        await inst.updateQuantity(param1)
    })

    test("5", async () => {
        await inst.updateQuantity([])
    })
})
