// import { Address, BigInt } from "@graphprotocol/graph-ts";
// import {
//   ItemBought as ItemBoughtEvent,
//   ItemCanceled as ItemCanceledEvent,
//   ItemListed as ItemListedEvent,
// } from "../generated/NftMarketplace/NftMarketplace";
// import {
//   ItemBought,
//   ItemCanceled,
//   ItemListed,
//   ActiveItem,
// } from "../generated/schema";

// export function handleItemBought(event: ItemBoughtEvent): void {
//   // ---------This is auto-generated----------
//   // let entity = new ItemBought(
//   //   event.transaction.hash.concatI32(event.logIndex.toI32())
//   // )
//   // entity.buyer = event.params.buyer
//   // entity.nftAddress = event.params.nftAddress
//   // entity.tokenId = event.params.tokenId
//   // entity.price = event.params.price

//   // entity.blockNumber = event.block.number
//   // entity.blockTimestamp = event.block.timestamp
//   // entity.transactionHash = event.transaction.hash

//   // entity.save()
//   // ----------------------------------------
//   let itemBought = ItemBought.load(
//     getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
//   )
//   let activeItem = ActiveItem.load(
//     getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
//   )
//   if (!itemBought) {
//     itemBought = new ItemBought(
//       getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
//     )
//   }
//   itemBought.buyer = event.params.buyer
//   itemBought.nftAddress = event.params.nftAddress
//   itemBought.tokenId = event.params.tokenId
//   activeItem!.buyer = event.params.buyer

//   itemBought.save()
//   activeItem!.save()
// }

// export function handleItemCanceled(event: ItemCanceledEvent): void {
//   // ---------This is auto-generated----------
//   // let entity = new ItemCanceled(
//   //   event.transaction.hash.concatI32(event.logIndex.toI32())
//   // )
//   // entity.seller = event.params.seller
//   // entity.nftAddress = event.params.nftAddress
//   // entity.tokenId = event.params.tokenId
//   // entity.blockNumber = event.block.number
//   // entity.blockTimestamp = event.block.timestamp
//   // entity.transactionHash = event.transaction.hash
//   // entity.save()
//   // ----------------------------------------
//   let itemCanceled = ItemCanceled.load(
//     getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
//   )
//   let activeItem = ActiveItem.load(
//     getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
//   )
//   if (!itemCanceled) {
//     itemCanceled = new ItemCanceled(
//       getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
//     )
//   }
//   itemCanceled.seller = event.params.seller
//   itemCanceled.nftAddress = event.params.nftAddress
//   itemCanceled.tokenId = event.params.tokenId
//   activeItem!.buyer = Address.fromString("0x000000000000000000000000000000000000dEaD")

//   itemCanceled.save()
//   activeItem!.save()
// }

// export function handleItemListed(event: ItemListedEvent): void {
//   // ---------This is auto-generated----------
//   // let entity = new ItemListed(
//   //   event.transaction.hash.concatI32(event.logIndex.toI32())
//   // )
//   // entity.seller = event.params.seller
//   // entity.nftAddress = event.params.nftAddress
//   // entity.tokenId = event.params.tokenId
//   // entity.price = event.params.price
//   // entity.blockNumber = event.block.number
//   // entity.blockTimestamp = event.block.timestamp
//   // entity.transactionHash = event.transaction.hash
//   // entity.save()
//   // ----------------------------------------
//   let itemListed = ItemListed.load(
//     getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
//   )
//   let activeItem = ActiveItem.load(
//     getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
//   )
//   if (!itemListed) {
//     itemListed = new ItemListed(
//       getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
//     )
//   }
//   if (!activeItem) {
//     activeItem = new ActiveItem(
//       getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
//     )
//   }
//   itemListed.seller = event.params.seller
//   activeItem.seller = event.params.seller

//   itemListed.nftAddress = event.params.nftAddress
//   activeItem.nftAddress = event.params.nftAddress

//   itemListed.tokenId = event.params.tokenId
//   activeItem.tokenId = event.params.tokenId

//   itemListed.price = event.params.price
//   activeItem.price = event.params.price

//   activeItem.buyer = Address.fromString("0x0000000000000000000000000000000000000000")

//   itemListed.save()
//   activeItem.save()
// }

// function getIdFromEventParams(tokenId: BigInt, nftAddress: Address): string {
//   return tokenId.toHexString() + nftAddress.toHexString()
// }

import { BigInt, Address } from "@graphprotocol/graph-ts"
import {
  NftMarketplace,
  ItemBought as ItemBoughtEvent,
  ItemCanceled as ItemCanceledEvent,
  ItemListed as ItemListedEvent,
} from "../generated/NftMarketplace/NftMarketplace"
import { ItemListed, ActiveItem, ItemBought, ItemCanceled } from "../generated/schema"

export function handleItemListed(event: ItemListedEvent): void {
  let itemListed = ItemListed.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  )
  let activeItem = ActiveItem.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  )
  if (!itemListed) {
    itemListed = new ItemListed(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    )
  }
  if (!activeItem) {
    activeItem = new ActiveItem(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    )
  }
  itemListed.seller = event.params.seller
  activeItem.seller = event.params.seller

  itemListed.nftAddress = event.params.nftAddress
  activeItem.nftAddress = event.params.nftAddress

  itemListed.tokenId = event.params.tokenId
  activeItem.tokenId = event.params.tokenId

  itemListed.price = event.params.price
  activeItem.price = event.params.price

  activeItem.buyer = Address.fromString("0x0000000000000000000000000000000000000000")

  itemListed.save()
  activeItem.save()
}

export function handleItemCanceled(event: ItemCanceledEvent): void {
  let itemCanceled = ItemCanceled.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  )
  let activeItem = ActiveItem.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  )
  if (!itemCanceled) {
    itemCanceled = new ItemCanceled(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    )
  }
  itemCanceled.seller = event.params.seller
  itemCanceled.nftAddress = event.params.nftAddress
  itemCanceled.tokenId = event.params.tokenId
  activeItem!.buyer = Address.fromString("0x000000000000000000000000000000000000dEaD")

  itemCanceled.save()
  activeItem!.save()
}

export function handleItemBought(event: ItemBoughtEvent): void {
  let itemBought = ItemBought.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  )
  let activeItem = ActiveItem.load(
    getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
  )
  if (!itemBought) {
    itemBought = new ItemBought(
      getIdFromEventParams(event.params.tokenId, event.params.nftAddress)
    )
  }
  itemBought.buyer = event.params.buyer
  itemBought.nftAddress = event.params.nftAddress
  itemBought.tokenId = event.params.tokenId
  activeItem!.buyer = event.params.buyer

  itemBought.save()
  activeItem!.save()
}

function getIdFromEventParams(tokenId: BigInt, nftAddress: Address): string {
  return tokenId.toHexString() + nftAddress.toHexString()
}