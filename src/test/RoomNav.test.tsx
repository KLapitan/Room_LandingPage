import { describe , it ,expect } from "vitest";
import { roomLinks } from "../Components/Room-Nav";



describe("RoomNav" , () => {
it("should contain 4 items inside the array")
expect(roomLinks).toHaveLength(4)

})

describe("RoomNav" , () => {
it("should contain home", () => {

expect(roomLinks).toContain("home")
})

})

describe("RoomNav" , () => {
it("should contain shop" , () => {
expect(roomLinks).toContain("shop")

})})
describe("RoomNav" , () => {it("should contain about", () => {
expect(roomLinks).toContain("about")
})})
describe("RoomNav" , () => {it("should contain contact", () => {
expect(roomLinks).toContain("contact")
})})