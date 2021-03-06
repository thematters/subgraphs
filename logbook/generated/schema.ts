// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Logbook extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("owner", Value.fromString(""));
    this.set("tokenURI", Value.fromString(""));
    this.set("createdAt", Value.fromBigInt(BigInt.zero()));
    this.set("title", Value.fromString(""));
    this.set("description", Value.fromString(""));
    this.set("forkPrice", Value.fromBigInt(BigInt.zero()));
    this.set("publications", Value.fromStringArray(new Array(0)));
    this.set("publicationCount", Value.fromBigInt(BigInt.zero()));
    this.set("forkCount", Value.fromBigInt(BigInt.zero()));
    this.set("donationCount", Value.fromBigInt(BigInt.zero()));
    this.set("transferCount", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Logbook entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Logbook entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Logbook", id.toString(), this);
    }
  }

  static load(id: string): Logbook | null {
    return changetype<Logbook | null>(store.get("Logbook", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get owner(): string {
    let value = this.get("owner");
    return value!.toString();
  }

  set owner(value: string) {
    this.set("owner", Value.fromString(value));
  }

  get tokenURI(): string {
    let value = this.get("tokenURI");
    return value!.toString();
  }

  set tokenURI(value: string) {
    this.set("tokenURI", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get loggedAt(): BigInt | null {
    let value = this.get("loggedAt");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set loggedAt(value: BigInt | null) {
    if (!value) {
      this.unset("loggedAt");
    } else {
      this.set("loggedAt", Value.fromBigInt(<BigInt>value));
    }
  }

  get title(): string {
    let value = this.get("title");
    return value!.toString();
  }

  set title(value: string) {
    this.set("title", Value.fromString(value));
  }

  get description(): string {
    let value = this.get("description");
    return value!.toString();
  }

  set description(value: string) {
    this.set("description", Value.fromString(value));
  }

  get forkPrice(): BigInt {
    let value = this.get("forkPrice");
    return value!.toBigInt();
  }

  set forkPrice(value: BigInt) {
    this.set("forkPrice", Value.fromBigInt(value));
  }

  get parent(): string | null {
    let value = this.get("parent");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set parent(value: string | null) {
    if (!value) {
      this.unset("parent");
    } else {
      this.set("parent", Value.fromString(<string>value));
    }
  }

  get publications(): Array<string> {
    let value = this.get("publications");
    return value!.toStringArray();
  }

  set publications(value: Array<string>) {
    this.set("publications", Value.fromStringArray(value));
  }

  get forks(): Array<string> {
    let value = this.get("forks");
    return value!.toStringArray();
  }

  set forks(value: Array<string>) {
    this.set("forks", Value.fromStringArray(value));
  }

  get donations(): Array<string> {
    let value = this.get("donations");
    return value!.toStringArray();
  }

  set donations(value: Array<string>) {
    this.set("donations", Value.fromStringArray(value));
  }

  get publicationCount(): BigInt {
    let value = this.get("publicationCount");
    return value!.toBigInt();
  }

  set publicationCount(value: BigInt) {
    this.set("publicationCount", Value.fromBigInt(value));
  }

  get forkCount(): BigInt {
    let value = this.get("forkCount");
    return value!.toBigInt();
  }

  set forkCount(value: BigInt) {
    this.set("forkCount", Value.fromBigInt(value));
  }

  get donationCount(): BigInt {
    let value = this.get("donationCount");
    return value!.toBigInt();
  }

  set donationCount(value: BigInt) {
    this.set("donationCount", Value.fromBigInt(value));
  }

  get transferCount(): BigInt {
    let value = this.get("transferCount");
    return value!.toBigInt();
  }

  set transferCount(value: BigInt) {
    this.set("transferCount", Value.fromBigInt(value));
  }
}

export class Log extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("author", Value.fromString(""));
    this.set("content", Value.fromString(""));
    this.set("logbooks", Value.fromStringArray(new Array(0)));
    this.set("logbookCount", Value.fromBigInt(BigInt.zero()));
    this.set("createdAt", Value.fromBigInt(BigInt.zero()));
    this.set("txHash", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Log entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Log entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Log", id.toString(), this);
    }
  }

  static load(id: string): Log | null {
    return changetype<Log | null>(store.get("Log", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get author(): string {
    let value = this.get("author");
    return value!.toString();
  }

  set author(value: string) {
    this.set("author", Value.fromString(value));
  }

  get content(): string {
    let value = this.get("content");
    return value!.toString();
  }

  set content(value: string) {
    this.set("content", Value.fromString(value));
  }

  get source(): string | null {
    let value = this.get("source");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set source(value: string | null) {
    if (!value) {
      this.unset("source");
    } else {
      this.set("source", Value.fromString(<string>value));
    }
  }

  get logbooks(): Array<string> {
    let value = this.get("logbooks");
    return value!.toStringArray();
  }

  set logbooks(value: Array<string>) {
    this.set("logbooks", Value.fromStringArray(value));
  }

  get logbookCount(): BigInt {
    let value = this.get("logbookCount");
    return value!.toBigInt();
  }

  set logbookCount(value: BigInt) {
    this.set("logbookCount", Value.fromBigInt(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get txHash(): string {
    let value = this.get("txHash");
    return value!.toString();
  }

  set txHash(value: string) {
    this.set("txHash", Value.fromString(value));
  }
}

export class Publication extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("log", Value.fromString(""));
    this.set("logbooks", Value.fromStringArray(new Array(0)));
    this.set("logbookCount", Value.fromBigInt(BigInt.zero()));
    this.set("createdAt", Value.fromBigInt(BigInt.zero()));
    this.set("txHash", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Publication entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Publication entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Publication", id.toString(), this);
    }
  }

  static load(id: string): Publication | null {
    return changetype<Publication | null>(store.get("Publication", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get log(): string {
    let value = this.get("log");
    return value!.toString();
  }

  set log(value: string) {
    this.set("log", Value.fromString(value));
  }

  get source(): string | null {
    let value = this.get("source");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set source(value: string | null) {
    if (!value) {
      this.unset("source");
    } else {
      this.set("source", Value.fromString(<string>value));
    }
  }

  get logbooks(): Array<string> {
    let value = this.get("logbooks");
    return value!.toStringArray();
  }

  set logbooks(value: Array<string>) {
    this.set("logbooks", Value.fromStringArray(value));
  }

  get logbookCount(): BigInt {
    let value = this.get("logbookCount");
    return value!.toBigInt();
  }

  set logbookCount(value: BigInt) {
    this.set("logbookCount", Value.fromBigInt(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get txHash(): string {
    let value = this.get("txHash");
    return value!.toString();
  }

  set txHash(value: string) {
    this.set("txHash", Value.fromString(value));
  }
}

export class Account extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("balance", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Account entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Account entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Account", id.toString(), this);
    }
  }

  static load(id: string): Account | null {
    return changetype<Account | null>(store.get("Account", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get balance(): BigInt {
    let value = this.get("balance");
    return value!.toBigInt();
  }

  set balance(value: BigInt) {
    this.set("balance", Value.fromBigInt(value));
  }

  get logbooks(): Array<string> {
    let value = this.get("logbooks");
    return value!.toStringArray();
  }

  set logbooks(value: Array<string>) {
    this.set("logbooks", Value.fromStringArray(value));
  }
}

export class Fork extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("from", Value.fromString(""));
    this.set("to", Value.fromString(""));
    this.set("end", Value.fromString(""));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("createdAt", Value.fromBigInt(BigInt.zero()));
    this.set("txHash", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Fork entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Fork entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Fork", id.toString(), this);
    }
  }

  static load(id: string): Fork | null {
    return changetype<Fork | null>(store.get("Fork", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get from(): string {
    let value = this.get("from");
    return value!.toString();
  }

  set from(value: string) {
    this.set("from", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value!.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }

  get end(): string {
    let value = this.get("end");
    return value!.toString();
  }

  set end(value: string) {
    this.set("end", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get txHash(): string {
    let value = this.get("txHash");
    return value!.toString();
  }

  set txHash(value: string) {
    this.set("txHash", Value.fromString(value));
  }
}

export class Donation extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("to", Value.fromString(""));
    this.set("donor", Value.fromString(""));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("createdAt", Value.fromBigInt(BigInt.zero()));
    this.set("txHash", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Donation entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Donation entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Donation", id.toString(), this);
    }
  }

  static load(id: string): Donation | null {
    return changetype<Donation | null>(store.get("Donation", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value!.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }

  get donor(): string {
    let value = this.get("donor");
    return value!.toString();
  }

  set donor(value: string) {
    this.set("donor", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get txHash(): string {
    let value = this.get("txHash");
    return value!.toString();
  }

  set txHash(value: string) {
    this.set("txHash", Value.fromString(value));
  }
}

export class Pay extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("to", Value.fromString(""));
    this.set("sender", Value.fromString(""));
    this.set("recipient", Value.fromString(""));
    this.set("amount", Value.fromBigInt(BigInt.zero()));
    this.set("purpose", Value.fromString(""));
    this.set("createdAt", Value.fromBigInt(BigInt.zero()));
    this.set("txHash", Value.fromString(""));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Pay entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Pay entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Pay", id.toString(), this);
    }
  }

  static load(id: string): Pay | null {
    return changetype<Pay | null>(store.get("Pay", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get to(): string {
    let value = this.get("to");
    return value!.toString();
  }

  set to(value: string) {
    this.set("to", Value.fromString(value));
  }

  get sender(): string {
    let value = this.get("sender");
    return value!.toString();
  }

  set sender(value: string) {
    this.set("sender", Value.fromString(value));
  }

  get recipient(): string {
    let value = this.get("recipient");
    return value!.toString();
  }

  set recipient(value: string) {
    this.set("recipient", Value.fromString(value));
  }

  get amount(): BigInt {
    let value = this.get("amount");
    return value!.toBigInt();
  }

  set amount(value: BigInt) {
    this.set("amount", Value.fromBigInt(value));
  }

  get purpose(): string {
    let value = this.get("purpose");
    return value!.toString();
  }

  set purpose(value: string) {
    this.set("purpose", Value.fromString(value));
  }

  get createdAt(): BigInt {
    let value = this.get("createdAt");
    return value!.toBigInt();
  }

  set createdAt(value: BigInt) {
    this.set("createdAt", Value.fromBigInt(value));
  }

  get txHash(): string {
    let value = this.get("txHash");
    return value!.toString();
  }

  set txHash(value: string) {
    this.set("txHash", Value.fromString(value));
  }
}
