import { scrypt, randomBytes } from "crypto";
import { promisify } from "util";

const scryptAsync = promisify(scrypt);

export class Password {
  static async toHash(password: string) {
    const salt = randomBytes(8).toString("hex");
    const buf = (await scryptAsync(password, salt, 64)) as Buffer;
    return `${buf.toString("hex")}.${salt}`;
  }

  static async compare(dbPassword: string, userPassword: string) {
    const [hashedPassword, salt] = dbPassword.split(".");
    const buf = (await scryptAsync(userPassword, salt, 64)) as Buffer;
    return buf.toString("hex") === hashedPassword;
  }
}
