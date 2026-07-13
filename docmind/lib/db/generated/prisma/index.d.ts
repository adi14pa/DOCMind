
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model RagDocument
 * 
 */
export type RagDocument = $Result.DefaultSelection<Prisma.$RagDocumentPayload>
/**
 * Model RagChunk
 * 
 */
export type RagChunk = $Result.DefaultSelection<Prisma.$RagChunkPayload>
/**
 * Model RagConversation
 * 
 */
export type RagConversation = $Result.DefaultSelection<Prisma.$RagConversationPayload>
/**
 * Model CodeReview
 * 
 */
export type CodeReview = $Result.DefaultSelection<Prisma.$CodeReviewPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more RagDocuments
 * const ragDocuments = await prisma.ragDocument.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more RagDocuments
   * const ragDocuments = await prisma.ragDocument.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.ragDocument`: Exposes CRUD operations for the **RagDocument** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RagDocuments
    * const ragDocuments = await prisma.ragDocument.findMany()
    * ```
    */
  get ragDocument(): Prisma.RagDocumentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ragChunk`: Exposes CRUD operations for the **RagChunk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RagChunks
    * const ragChunks = await prisma.ragChunk.findMany()
    * ```
    */
  get ragChunk(): Prisma.RagChunkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ragConversation`: Exposes CRUD operations for the **RagConversation** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RagConversations
    * const ragConversations = await prisma.ragConversation.findMany()
    * ```
    */
  get ragConversation(): Prisma.RagConversationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.codeReview`: Exposes CRUD operations for the **CodeReview** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CodeReviews
    * const codeReviews = await prisma.codeReview.findMany()
    * ```
    */
  get codeReview(): Prisma.CodeReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    RagDocument: 'RagDocument',
    RagChunk: 'RagChunk',
    RagConversation: 'RagConversation',
    CodeReview: 'CodeReview',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "ragDocument" | "ragChunk" | "ragConversation" | "codeReview" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      RagDocument: {
        payload: Prisma.$RagDocumentPayload<ExtArgs>
        fields: Prisma.RagDocumentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RagDocumentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagDocumentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RagDocumentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagDocumentPayload>
          }
          findFirst: {
            args: Prisma.RagDocumentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagDocumentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RagDocumentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagDocumentPayload>
          }
          findMany: {
            args: Prisma.RagDocumentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagDocumentPayload>[]
          }
          create: {
            args: Prisma.RagDocumentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagDocumentPayload>
          }
          createMany: {
            args: Prisma.RagDocumentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RagDocumentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagDocumentPayload>[]
          }
          delete: {
            args: Prisma.RagDocumentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagDocumentPayload>
          }
          update: {
            args: Prisma.RagDocumentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagDocumentPayload>
          }
          deleteMany: {
            args: Prisma.RagDocumentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RagDocumentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RagDocumentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagDocumentPayload>[]
          }
          upsert: {
            args: Prisma.RagDocumentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagDocumentPayload>
          }
          aggregate: {
            args: Prisma.RagDocumentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRagDocument>
          }
          groupBy: {
            args: Prisma.RagDocumentGroupByArgs<ExtArgs>
            result: $Utils.Optional<RagDocumentGroupByOutputType>[]
          }
          count: {
            args: Prisma.RagDocumentCountArgs<ExtArgs>
            result: $Utils.Optional<RagDocumentCountAggregateOutputType> | number
          }
        }
      }
      RagChunk: {
        payload: Prisma.$RagChunkPayload<ExtArgs>
        fields: Prisma.RagChunkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RagChunkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagChunkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RagChunkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagChunkPayload>
          }
          findFirst: {
            args: Prisma.RagChunkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagChunkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RagChunkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagChunkPayload>
          }
          findMany: {
            args: Prisma.RagChunkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagChunkPayload>[]
          }
          create: {
            args: Prisma.RagChunkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagChunkPayload>
          }
          createMany: {
            args: Prisma.RagChunkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RagChunkCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagChunkPayload>[]
          }
          delete: {
            args: Prisma.RagChunkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagChunkPayload>
          }
          update: {
            args: Prisma.RagChunkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagChunkPayload>
          }
          deleteMany: {
            args: Prisma.RagChunkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RagChunkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RagChunkUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagChunkPayload>[]
          }
          upsert: {
            args: Prisma.RagChunkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagChunkPayload>
          }
          aggregate: {
            args: Prisma.RagChunkAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRagChunk>
          }
          groupBy: {
            args: Prisma.RagChunkGroupByArgs<ExtArgs>
            result: $Utils.Optional<RagChunkGroupByOutputType>[]
          }
          count: {
            args: Prisma.RagChunkCountArgs<ExtArgs>
            result: $Utils.Optional<RagChunkCountAggregateOutputType> | number
          }
        }
      }
      RagConversation: {
        payload: Prisma.$RagConversationPayload<ExtArgs>
        fields: Prisma.RagConversationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RagConversationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagConversationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RagConversationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagConversationPayload>
          }
          findFirst: {
            args: Prisma.RagConversationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagConversationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RagConversationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagConversationPayload>
          }
          findMany: {
            args: Prisma.RagConversationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagConversationPayload>[]
          }
          create: {
            args: Prisma.RagConversationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagConversationPayload>
          }
          createMany: {
            args: Prisma.RagConversationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RagConversationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagConversationPayload>[]
          }
          delete: {
            args: Prisma.RagConversationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagConversationPayload>
          }
          update: {
            args: Prisma.RagConversationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagConversationPayload>
          }
          deleteMany: {
            args: Prisma.RagConversationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RagConversationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RagConversationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagConversationPayload>[]
          }
          upsert: {
            args: Prisma.RagConversationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RagConversationPayload>
          }
          aggregate: {
            args: Prisma.RagConversationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRagConversation>
          }
          groupBy: {
            args: Prisma.RagConversationGroupByArgs<ExtArgs>
            result: $Utils.Optional<RagConversationGroupByOutputType>[]
          }
          count: {
            args: Prisma.RagConversationCountArgs<ExtArgs>
            result: $Utils.Optional<RagConversationCountAggregateOutputType> | number
          }
        }
      }
      CodeReview: {
        payload: Prisma.$CodeReviewPayload<ExtArgs>
        fields: Prisma.CodeReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CodeReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CodeReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeReviewPayload>
          }
          findFirst: {
            args: Prisma.CodeReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CodeReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeReviewPayload>
          }
          findMany: {
            args: Prisma.CodeReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeReviewPayload>[]
          }
          create: {
            args: Prisma.CodeReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeReviewPayload>
          }
          createMany: {
            args: Prisma.CodeReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CodeReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeReviewPayload>[]
          }
          delete: {
            args: Prisma.CodeReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeReviewPayload>
          }
          update: {
            args: Prisma.CodeReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeReviewPayload>
          }
          deleteMany: {
            args: Prisma.CodeReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CodeReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CodeReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeReviewPayload>[]
          }
          upsert: {
            args: Prisma.CodeReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CodeReviewPayload>
          }
          aggregate: {
            args: Prisma.CodeReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCodeReview>
          }
          groupBy: {
            args: Prisma.CodeReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<CodeReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.CodeReviewCountArgs<ExtArgs>
            result: $Utils.Optional<CodeReviewCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    ragDocument?: RagDocumentOmit
    ragChunk?: RagChunkOmit
    ragConversation?: RagConversationOmit
    codeReview?: CodeReviewOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RagDocumentCountOutputType
   */

  export type RagDocumentCountOutputType = {
    chunks: number
    conversations: number
  }

  export type RagDocumentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    chunks?: boolean | RagDocumentCountOutputTypeCountChunksArgs
    conversations?: boolean | RagDocumentCountOutputTypeCountConversationsArgs
  }

  // Custom InputTypes
  /**
   * RagDocumentCountOutputType without action
   */
  export type RagDocumentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagDocumentCountOutputType
     */
    select?: RagDocumentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RagDocumentCountOutputType without action
   */
  export type RagDocumentCountOutputTypeCountChunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RagChunkWhereInput
  }

  /**
   * RagDocumentCountOutputType without action
   */
  export type RagDocumentCountOutputTypeCountConversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RagConversationWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    documents: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | UserCountOutputTypeCountDocumentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDocumentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RagDocumentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model RagDocument
   */

  export type AggregateRagDocument = {
    _count: RagDocumentCountAggregateOutputType | null
    _avg: RagDocumentAvgAggregateOutputType | null
    _sum: RagDocumentSumAggregateOutputType | null
    _min: RagDocumentMinAggregateOutputType | null
    _max: RagDocumentMaxAggregateOutputType | null
  }

  export type RagDocumentAvgAggregateOutputType = {
    id: number | null
    pageCount: number | null
    chunkCount: number | null
    userId: number | null
  }

  export type RagDocumentSumAggregateOutputType = {
    id: number | null
    pageCount: number | null
    chunkCount: number | null
    userId: number | null
  }

  export type RagDocumentMinAggregateOutputType = {
    id: number | null
    filename: string | null
    originalName: string | null
    pageCount: number | null
    chunkCount: number | null
    status: string | null
    createdAt: Date | null
    userId: number | null
  }

  export type RagDocumentMaxAggregateOutputType = {
    id: number | null
    filename: string | null
    originalName: string | null
    pageCount: number | null
    chunkCount: number | null
    status: string | null
    createdAt: Date | null
    userId: number | null
  }

  export type RagDocumentCountAggregateOutputType = {
    id: number
    filename: number
    originalName: number
    pageCount: number
    chunkCount: number
    status: number
    createdAt: number
    userId: number
    _all: number
  }


  export type RagDocumentAvgAggregateInputType = {
    id?: true
    pageCount?: true
    chunkCount?: true
    userId?: true
  }

  export type RagDocumentSumAggregateInputType = {
    id?: true
    pageCount?: true
    chunkCount?: true
    userId?: true
  }

  export type RagDocumentMinAggregateInputType = {
    id?: true
    filename?: true
    originalName?: true
    pageCount?: true
    chunkCount?: true
    status?: true
    createdAt?: true
    userId?: true
  }

  export type RagDocumentMaxAggregateInputType = {
    id?: true
    filename?: true
    originalName?: true
    pageCount?: true
    chunkCount?: true
    status?: true
    createdAt?: true
    userId?: true
  }

  export type RagDocumentCountAggregateInputType = {
    id?: true
    filename?: true
    originalName?: true
    pageCount?: true
    chunkCount?: true
    status?: true
    createdAt?: true
    userId?: true
    _all?: true
  }

  export type RagDocumentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RagDocument to aggregate.
     */
    where?: RagDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RagDocuments to fetch.
     */
    orderBy?: RagDocumentOrderByWithRelationInput | RagDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RagDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RagDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RagDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RagDocuments
    **/
    _count?: true | RagDocumentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RagDocumentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RagDocumentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RagDocumentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RagDocumentMaxAggregateInputType
  }

  export type GetRagDocumentAggregateType<T extends RagDocumentAggregateArgs> = {
        [P in keyof T & keyof AggregateRagDocument]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRagDocument[P]>
      : GetScalarType<T[P], AggregateRagDocument[P]>
  }




  export type RagDocumentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RagDocumentWhereInput
    orderBy?: RagDocumentOrderByWithAggregationInput | RagDocumentOrderByWithAggregationInput[]
    by: RagDocumentScalarFieldEnum[] | RagDocumentScalarFieldEnum
    having?: RagDocumentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RagDocumentCountAggregateInputType | true
    _avg?: RagDocumentAvgAggregateInputType
    _sum?: RagDocumentSumAggregateInputType
    _min?: RagDocumentMinAggregateInputType
    _max?: RagDocumentMaxAggregateInputType
  }

  export type RagDocumentGroupByOutputType = {
    id: number
    filename: string
    originalName: string
    pageCount: number | null
    chunkCount: number
    status: string
    createdAt: Date
    userId: number | null
    _count: RagDocumentCountAggregateOutputType | null
    _avg: RagDocumentAvgAggregateOutputType | null
    _sum: RagDocumentSumAggregateOutputType | null
    _min: RagDocumentMinAggregateOutputType | null
    _max: RagDocumentMaxAggregateOutputType | null
  }

  type GetRagDocumentGroupByPayload<T extends RagDocumentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RagDocumentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RagDocumentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RagDocumentGroupByOutputType[P]>
            : GetScalarType<T[P], RagDocumentGroupByOutputType[P]>
        }
      >
    >


  export type RagDocumentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    originalName?: boolean
    pageCount?: boolean
    chunkCount?: boolean
    status?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | RagDocument$userArgs<ExtArgs>
    chunks?: boolean | RagDocument$chunksArgs<ExtArgs>
    conversations?: boolean | RagDocument$conversationsArgs<ExtArgs>
    _count?: boolean | RagDocumentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ragDocument"]>

  export type RagDocumentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    originalName?: boolean
    pageCount?: boolean
    chunkCount?: boolean
    status?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | RagDocument$userArgs<ExtArgs>
  }, ExtArgs["result"]["ragDocument"]>

  export type RagDocumentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    filename?: boolean
    originalName?: boolean
    pageCount?: boolean
    chunkCount?: boolean
    status?: boolean
    createdAt?: boolean
    userId?: boolean
    user?: boolean | RagDocument$userArgs<ExtArgs>
  }, ExtArgs["result"]["ragDocument"]>

  export type RagDocumentSelectScalar = {
    id?: boolean
    filename?: boolean
    originalName?: boolean
    pageCount?: boolean
    chunkCount?: boolean
    status?: boolean
    createdAt?: boolean
    userId?: boolean
  }

  export type RagDocumentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "filename" | "originalName" | "pageCount" | "chunkCount" | "status" | "createdAt" | "userId", ExtArgs["result"]["ragDocument"]>
  export type RagDocumentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RagDocument$userArgs<ExtArgs>
    chunks?: boolean | RagDocument$chunksArgs<ExtArgs>
    conversations?: boolean | RagDocument$conversationsArgs<ExtArgs>
    _count?: boolean | RagDocumentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RagDocumentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RagDocument$userArgs<ExtArgs>
  }
  export type RagDocumentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | RagDocument$userArgs<ExtArgs>
  }

  export type $RagDocumentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RagDocument"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      chunks: Prisma.$RagChunkPayload<ExtArgs>[]
      conversations: Prisma.$RagConversationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      filename: string
      originalName: string
      pageCount: number | null
      chunkCount: number
      status: string
      createdAt: Date
      userId: number | null
    }, ExtArgs["result"]["ragDocument"]>
    composites: {}
  }

  type RagDocumentGetPayload<S extends boolean | null | undefined | RagDocumentDefaultArgs> = $Result.GetResult<Prisma.$RagDocumentPayload, S>

  type RagDocumentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RagDocumentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RagDocumentCountAggregateInputType | true
    }

  export interface RagDocumentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RagDocument'], meta: { name: 'RagDocument' } }
    /**
     * Find zero or one RagDocument that matches the filter.
     * @param {RagDocumentFindUniqueArgs} args - Arguments to find a RagDocument
     * @example
     * // Get one RagDocument
     * const ragDocument = await prisma.ragDocument.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RagDocumentFindUniqueArgs>(args: SelectSubset<T, RagDocumentFindUniqueArgs<ExtArgs>>): Prisma__RagDocumentClient<$Result.GetResult<Prisma.$RagDocumentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RagDocument that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RagDocumentFindUniqueOrThrowArgs} args - Arguments to find a RagDocument
     * @example
     * // Get one RagDocument
     * const ragDocument = await prisma.ragDocument.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RagDocumentFindUniqueOrThrowArgs>(args: SelectSubset<T, RagDocumentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RagDocumentClient<$Result.GetResult<Prisma.$RagDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RagDocument that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RagDocumentFindFirstArgs} args - Arguments to find a RagDocument
     * @example
     * // Get one RagDocument
     * const ragDocument = await prisma.ragDocument.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RagDocumentFindFirstArgs>(args?: SelectSubset<T, RagDocumentFindFirstArgs<ExtArgs>>): Prisma__RagDocumentClient<$Result.GetResult<Prisma.$RagDocumentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RagDocument that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RagDocumentFindFirstOrThrowArgs} args - Arguments to find a RagDocument
     * @example
     * // Get one RagDocument
     * const ragDocument = await prisma.ragDocument.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RagDocumentFindFirstOrThrowArgs>(args?: SelectSubset<T, RagDocumentFindFirstOrThrowArgs<ExtArgs>>): Prisma__RagDocumentClient<$Result.GetResult<Prisma.$RagDocumentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RagDocuments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RagDocumentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RagDocuments
     * const ragDocuments = await prisma.ragDocument.findMany()
     * 
     * // Get first 10 RagDocuments
     * const ragDocuments = await prisma.ragDocument.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ragDocumentWithIdOnly = await prisma.ragDocument.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RagDocumentFindManyArgs>(args?: SelectSubset<T, RagDocumentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RagDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RagDocument.
     * @param {RagDocumentCreateArgs} args - Arguments to create a RagDocument.
     * @example
     * // Create one RagDocument
     * const RagDocument = await prisma.ragDocument.create({
     *   data: {
     *     // ... data to create a RagDocument
     *   }
     * })
     * 
     */
    create<T extends RagDocumentCreateArgs>(args: SelectSubset<T, RagDocumentCreateArgs<ExtArgs>>): Prisma__RagDocumentClient<$Result.GetResult<Prisma.$RagDocumentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RagDocuments.
     * @param {RagDocumentCreateManyArgs} args - Arguments to create many RagDocuments.
     * @example
     * // Create many RagDocuments
     * const ragDocument = await prisma.ragDocument.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RagDocumentCreateManyArgs>(args?: SelectSubset<T, RagDocumentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RagDocuments and returns the data saved in the database.
     * @param {RagDocumentCreateManyAndReturnArgs} args - Arguments to create many RagDocuments.
     * @example
     * // Create many RagDocuments
     * const ragDocument = await prisma.ragDocument.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RagDocuments and only return the `id`
     * const ragDocumentWithIdOnly = await prisma.ragDocument.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RagDocumentCreateManyAndReturnArgs>(args?: SelectSubset<T, RagDocumentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RagDocumentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RagDocument.
     * @param {RagDocumentDeleteArgs} args - Arguments to delete one RagDocument.
     * @example
     * // Delete one RagDocument
     * const RagDocument = await prisma.ragDocument.delete({
     *   where: {
     *     // ... filter to delete one RagDocument
     *   }
     * })
     * 
     */
    delete<T extends RagDocumentDeleteArgs>(args: SelectSubset<T, RagDocumentDeleteArgs<ExtArgs>>): Prisma__RagDocumentClient<$Result.GetResult<Prisma.$RagDocumentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RagDocument.
     * @param {RagDocumentUpdateArgs} args - Arguments to update one RagDocument.
     * @example
     * // Update one RagDocument
     * const ragDocument = await prisma.ragDocument.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RagDocumentUpdateArgs>(args: SelectSubset<T, RagDocumentUpdateArgs<ExtArgs>>): Prisma__RagDocumentClient<$Result.GetResult<Prisma.$RagDocumentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RagDocuments.
     * @param {RagDocumentDeleteManyArgs} args - Arguments to filter RagDocuments to delete.
     * @example
     * // Delete a few RagDocuments
     * const { count } = await prisma.ragDocument.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RagDocumentDeleteManyArgs>(args?: SelectSubset<T, RagDocumentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RagDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RagDocumentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RagDocuments
     * const ragDocument = await prisma.ragDocument.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RagDocumentUpdateManyArgs>(args: SelectSubset<T, RagDocumentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RagDocuments and returns the data updated in the database.
     * @param {RagDocumentUpdateManyAndReturnArgs} args - Arguments to update many RagDocuments.
     * @example
     * // Update many RagDocuments
     * const ragDocument = await prisma.ragDocument.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RagDocuments and only return the `id`
     * const ragDocumentWithIdOnly = await prisma.ragDocument.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RagDocumentUpdateManyAndReturnArgs>(args: SelectSubset<T, RagDocumentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RagDocumentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RagDocument.
     * @param {RagDocumentUpsertArgs} args - Arguments to update or create a RagDocument.
     * @example
     * // Update or create a RagDocument
     * const ragDocument = await prisma.ragDocument.upsert({
     *   create: {
     *     // ... data to create a RagDocument
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RagDocument we want to update
     *   }
     * })
     */
    upsert<T extends RagDocumentUpsertArgs>(args: SelectSubset<T, RagDocumentUpsertArgs<ExtArgs>>): Prisma__RagDocumentClient<$Result.GetResult<Prisma.$RagDocumentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RagDocuments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RagDocumentCountArgs} args - Arguments to filter RagDocuments to count.
     * @example
     * // Count the number of RagDocuments
     * const count = await prisma.ragDocument.count({
     *   where: {
     *     // ... the filter for the RagDocuments we want to count
     *   }
     * })
    **/
    count<T extends RagDocumentCountArgs>(
      args?: Subset<T, RagDocumentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RagDocumentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RagDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RagDocumentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RagDocumentAggregateArgs>(args: Subset<T, RagDocumentAggregateArgs>): Prisma.PrismaPromise<GetRagDocumentAggregateType<T>>

    /**
     * Group by RagDocument.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RagDocumentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RagDocumentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RagDocumentGroupByArgs['orderBy'] }
        : { orderBy?: RagDocumentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RagDocumentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRagDocumentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RagDocument model
   */
  readonly fields: RagDocumentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RagDocument.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RagDocumentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends RagDocument$userArgs<ExtArgs> = {}>(args?: Subset<T, RagDocument$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    chunks<T extends RagDocument$chunksArgs<ExtArgs> = {}>(args?: Subset<T, RagDocument$chunksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RagChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    conversations<T extends RagDocument$conversationsArgs<ExtArgs> = {}>(args?: Subset<T, RagDocument$conversationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RagConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RagDocument model
   */
  interface RagDocumentFieldRefs {
    readonly id: FieldRef<"RagDocument", 'Int'>
    readonly filename: FieldRef<"RagDocument", 'String'>
    readonly originalName: FieldRef<"RagDocument", 'String'>
    readonly pageCount: FieldRef<"RagDocument", 'Int'>
    readonly chunkCount: FieldRef<"RagDocument", 'Int'>
    readonly status: FieldRef<"RagDocument", 'String'>
    readonly createdAt: FieldRef<"RagDocument", 'DateTime'>
    readonly userId: FieldRef<"RagDocument", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RagDocument findUnique
   */
  export type RagDocumentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagDocument
     */
    select?: RagDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagDocument
     */
    omit?: RagDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagDocumentInclude<ExtArgs> | null
    /**
     * Filter, which RagDocument to fetch.
     */
    where: RagDocumentWhereUniqueInput
  }

  /**
   * RagDocument findUniqueOrThrow
   */
  export type RagDocumentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagDocument
     */
    select?: RagDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagDocument
     */
    omit?: RagDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagDocumentInclude<ExtArgs> | null
    /**
     * Filter, which RagDocument to fetch.
     */
    where: RagDocumentWhereUniqueInput
  }

  /**
   * RagDocument findFirst
   */
  export type RagDocumentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagDocument
     */
    select?: RagDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagDocument
     */
    omit?: RagDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagDocumentInclude<ExtArgs> | null
    /**
     * Filter, which RagDocument to fetch.
     */
    where?: RagDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RagDocuments to fetch.
     */
    orderBy?: RagDocumentOrderByWithRelationInput | RagDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RagDocuments.
     */
    cursor?: RagDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RagDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RagDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RagDocuments.
     */
    distinct?: RagDocumentScalarFieldEnum | RagDocumentScalarFieldEnum[]
  }

  /**
   * RagDocument findFirstOrThrow
   */
  export type RagDocumentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagDocument
     */
    select?: RagDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagDocument
     */
    omit?: RagDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagDocumentInclude<ExtArgs> | null
    /**
     * Filter, which RagDocument to fetch.
     */
    where?: RagDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RagDocuments to fetch.
     */
    orderBy?: RagDocumentOrderByWithRelationInput | RagDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RagDocuments.
     */
    cursor?: RagDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RagDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RagDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RagDocuments.
     */
    distinct?: RagDocumentScalarFieldEnum | RagDocumentScalarFieldEnum[]
  }

  /**
   * RagDocument findMany
   */
  export type RagDocumentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagDocument
     */
    select?: RagDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagDocument
     */
    omit?: RagDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagDocumentInclude<ExtArgs> | null
    /**
     * Filter, which RagDocuments to fetch.
     */
    where?: RagDocumentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RagDocuments to fetch.
     */
    orderBy?: RagDocumentOrderByWithRelationInput | RagDocumentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RagDocuments.
     */
    cursor?: RagDocumentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RagDocuments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RagDocuments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RagDocuments.
     */
    distinct?: RagDocumentScalarFieldEnum | RagDocumentScalarFieldEnum[]
  }

  /**
   * RagDocument create
   */
  export type RagDocumentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagDocument
     */
    select?: RagDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagDocument
     */
    omit?: RagDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagDocumentInclude<ExtArgs> | null
    /**
     * The data needed to create a RagDocument.
     */
    data: XOR<RagDocumentCreateInput, RagDocumentUncheckedCreateInput>
  }

  /**
   * RagDocument createMany
   */
  export type RagDocumentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RagDocuments.
     */
    data: RagDocumentCreateManyInput | RagDocumentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RagDocument createManyAndReturn
   */
  export type RagDocumentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagDocument
     */
    select?: RagDocumentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RagDocument
     */
    omit?: RagDocumentOmit<ExtArgs> | null
    /**
     * The data used to create many RagDocuments.
     */
    data: RagDocumentCreateManyInput | RagDocumentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagDocumentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RagDocument update
   */
  export type RagDocumentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagDocument
     */
    select?: RagDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagDocument
     */
    omit?: RagDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagDocumentInclude<ExtArgs> | null
    /**
     * The data needed to update a RagDocument.
     */
    data: XOR<RagDocumentUpdateInput, RagDocumentUncheckedUpdateInput>
    /**
     * Choose, which RagDocument to update.
     */
    where: RagDocumentWhereUniqueInput
  }

  /**
   * RagDocument updateMany
   */
  export type RagDocumentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RagDocuments.
     */
    data: XOR<RagDocumentUpdateManyMutationInput, RagDocumentUncheckedUpdateManyInput>
    /**
     * Filter which RagDocuments to update
     */
    where?: RagDocumentWhereInput
    /**
     * Limit how many RagDocuments to update.
     */
    limit?: number
  }

  /**
   * RagDocument updateManyAndReturn
   */
  export type RagDocumentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagDocument
     */
    select?: RagDocumentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RagDocument
     */
    omit?: RagDocumentOmit<ExtArgs> | null
    /**
     * The data used to update RagDocuments.
     */
    data: XOR<RagDocumentUpdateManyMutationInput, RagDocumentUncheckedUpdateManyInput>
    /**
     * Filter which RagDocuments to update
     */
    where?: RagDocumentWhereInput
    /**
     * Limit how many RagDocuments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagDocumentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RagDocument upsert
   */
  export type RagDocumentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagDocument
     */
    select?: RagDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagDocument
     */
    omit?: RagDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagDocumentInclude<ExtArgs> | null
    /**
     * The filter to search for the RagDocument to update in case it exists.
     */
    where: RagDocumentWhereUniqueInput
    /**
     * In case the RagDocument found by the `where` argument doesn't exist, create a new RagDocument with this data.
     */
    create: XOR<RagDocumentCreateInput, RagDocumentUncheckedCreateInput>
    /**
     * In case the RagDocument was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RagDocumentUpdateInput, RagDocumentUncheckedUpdateInput>
  }

  /**
   * RagDocument delete
   */
  export type RagDocumentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagDocument
     */
    select?: RagDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagDocument
     */
    omit?: RagDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagDocumentInclude<ExtArgs> | null
    /**
     * Filter which RagDocument to delete.
     */
    where: RagDocumentWhereUniqueInput
  }

  /**
   * RagDocument deleteMany
   */
  export type RagDocumentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RagDocuments to delete
     */
    where?: RagDocumentWhereInput
    /**
     * Limit how many RagDocuments to delete.
     */
    limit?: number
  }

  /**
   * RagDocument.user
   */
  export type RagDocument$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * RagDocument.chunks
   */
  export type RagDocument$chunksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagChunk
     */
    select?: RagChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagChunk
     */
    omit?: RagChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagChunkInclude<ExtArgs> | null
    where?: RagChunkWhereInput
    orderBy?: RagChunkOrderByWithRelationInput | RagChunkOrderByWithRelationInput[]
    cursor?: RagChunkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RagChunkScalarFieldEnum | RagChunkScalarFieldEnum[]
  }

  /**
   * RagDocument.conversations
   */
  export type RagDocument$conversationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagConversation
     */
    select?: RagConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagConversation
     */
    omit?: RagConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagConversationInclude<ExtArgs> | null
    where?: RagConversationWhereInput
    orderBy?: RagConversationOrderByWithRelationInput | RagConversationOrderByWithRelationInput[]
    cursor?: RagConversationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RagConversationScalarFieldEnum | RagConversationScalarFieldEnum[]
  }

  /**
   * RagDocument without action
   */
  export type RagDocumentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagDocument
     */
    select?: RagDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagDocument
     */
    omit?: RagDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagDocumentInclude<ExtArgs> | null
  }


  /**
   * Model RagChunk
   */

  export type AggregateRagChunk = {
    _count: RagChunkCountAggregateOutputType | null
    _avg: RagChunkAvgAggregateOutputType | null
    _sum: RagChunkSumAggregateOutputType | null
    _min: RagChunkMinAggregateOutputType | null
    _max: RagChunkMaxAggregateOutputType | null
  }

  export type RagChunkAvgAggregateOutputType = {
    id: number | null
    documentId: number | null
    chunkIndex: number | null
    pageNumber: number | null
  }

  export type RagChunkSumAggregateOutputType = {
    id: number | null
    documentId: number | null
    chunkIndex: number | null
    pageNumber: number | null
  }

  export type RagChunkMinAggregateOutputType = {
    id: number | null
    documentId: number | null
    chunkIndex: number | null
    content: string | null
    pageNumber: number | null
    searchVector: string | null
  }

  export type RagChunkMaxAggregateOutputType = {
    id: number | null
    documentId: number | null
    chunkIndex: number | null
    content: string | null
    pageNumber: number | null
    searchVector: string | null
  }

  export type RagChunkCountAggregateOutputType = {
    id: number
    documentId: number
    chunkIndex: number
    content: number
    pageNumber: number
    searchVector: number
    _all: number
  }


  export type RagChunkAvgAggregateInputType = {
    id?: true
    documentId?: true
    chunkIndex?: true
    pageNumber?: true
  }

  export type RagChunkSumAggregateInputType = {
    id?: true
    documentId?: true
    chunkIndex?: true
    pageNumber?: true
  }

  export type RagChunkMinAggregateInputType = {
    id?: true
    documentId?: true
    chunkIndex?: true
    content?: true
    pageNumber?: true
    searchVector?: true
  }

  export type RagChunkMaxAggregateInputType = {
    id?: true
    documentId?: true
    chunkIndex?: true
    content?: true
    pageNumber?: true
    searchVector?: true
  }

  export type RagChunkCountAggregateInputType = {
    id?: true
    documentId?: true
    chunkIndex?: true
    content?: true
    pageNumber?: true
    searchVector?: true
    _all?: true
  }

  export type RagChunkAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RagChunk to aggregate.
     */
    where?: RagChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RagChunks to fetch.
     */
    orderBy?: RagChunkOrderByWithRelationInput | RagChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RagChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RagChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RagChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RagChunks
    **/
    _count?: true | RagChunkCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RagChunkAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RagChunkSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RagChunkMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RagChunkMaxAggregateInputType
  }

  export type GetRagChunkAggregateType<T extends RagChunkAggregateArgs> = {
        [P in keyof T & keyof AggregateRagChunk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRagChunk[P]>
      : GetScalarType<T[P], AggregateRagChunk[P]>
  }




  export type RagChunkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RagChunkWhereInput
    orderBy?: RagChunkOrderByWithAggregationInput | RagChunkOrderByWithAggregationInput[]
    by: RagChunkScalarFieldEnum[] | RagChunkScalarFieldEnum
    having?: RagChunkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RagChunkCountAggregateInputType | true
    _avg?: RagChunkAvgAggregateInputType
    _sum?: RagChunkSumAggregateInputType
    _min?: RagChunkMinAggregateInputType
    _max?: RagChunkMaxAggregateInputType
  }

  export type RagChunkGroupByOutputType = {
    id: number
    documentId: number
    chunkIndex: number
    content: string
    pageNumber: number | null
    searchVector: string | null
    _count: RagChunkCountAggregateOutputType | null
    _avg: RagChunkAvgAggregateOutputType | null
    _sum: RagChunkSumAggregateOutputType | null
    _min: RagChunkMinAggregateOutputType | null
    _max: RagChunkMaxAggregateOutputType | null
  }

  type GetRagChunkGroupByPayload<T extends RagChunkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RagChunkGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RagChunkGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RagChunkGroupByOutputType[P]>
            : GetScalarType<T[P], RagChunkGroupByOutputType[P]>
        }
      >
    >


  export type RagChunkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    chunkIndex?: boolean
    content?: boolean
    pageNumber?: boolean
    searchVector?: boolean
    document?: boolean | RagDocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ragChunk"]>

  export type RagChunkSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    chunkIndex?: boolean
    content?: boolean
    pageNumber?: boolean
    searchVector?: boolean
    document?: boolean | RagDocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ragChunk"]>

  export type RagChunkSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    chunkIndex?: boolean
    content?: boolean
    pageNumber?: boolean
    searchVector?: boolean
    document?: boolean | RagDocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ragChunk"]>

  export type RagChunkSelectScalar = {
    id?: boolean
    documentId?: boolean
    chunkIndex?: boolean
    content?: boolean
    pageNumber?: boolean
    searchVector?: boolean
  }

  export type RagChunkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "chunkIndex" | "content" | "pageNumber" | "searchVector", ExtArgs["result"]["ragChunk"]>
  export type RagChunkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | RagDocumentDefaultArgs<ExtArgs>
  }
  export type RagChunkIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | RagDocumentDefaultArgs<ExtArgs>
  }
  export type RagChunkIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | RagDocumentDefaultArgs<ExtArgs>
  }

  export type $RagChunkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RagChunk"
    objects: {
      document: Prisma.$RagDocumentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentId: number
      chunkIndex: number
      content: string
      pageNumber: number | null
      searchVector: string | null
    }, ExtArgs["result"]["ragChunk"]>
    composites: {}
  }

  type RagChunkGetPayload<S extends boolean | null | undefined | RagChunkDefaultArgs> = $Result.GetResult<Prisma.$RagChunkPayload, S>

  type RagChunkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RagChunkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RagChunkCountAggregateInputType | true
    }

  export interface RagChunkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RagChunk'], meta: { name: 'RagChunk' } }
    /**
     * Find zero or one RagChunk that matches the filter.
     * @param {RagChunkFindUniqueArgs} args - Arguments to find a RagChunk
     * @example
     * // Get one RagChunk
     * const ragChunk = await prisma.ragChunk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RagChunkFindUniqueArgs>(args: SelectSubset<T, RagChunkFindUniqueArgs<ExtArgs>>): Prisma__RagChunkClient<$Result.GetResult<Prisma.$RagChunkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RagChunk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RagChunkFindUniqueOrThrowArgs} args - Arguments to find a RagChunk
     * @example
     * // Get one RagChunk
     * const ragChunk = await prisma.ragChunk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RagChunkFindUniqueOrThrowArgs>(args: SelectSubset<T, RagChunkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RagChunkClient<$Result.GetResult<Prisma.$RagChunkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RagChunk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RagChunkFindFirstArgs} args - Arguments to find a RagChunk
     * @example
     * // Get one RagChunk
     * const ragChunk = await prisma.ragChunk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RagChunkFindFirstArgs>(args?: SelectSubset<T, RagChunkFindFirstArgs<ExtArgs>>): Prisma__RagChunkClient<$Result.GetResult<Prisma.$RagChunkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RagChunk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RagChunkFindFirstOrThrowArgs} args - Arguments to find a RagChunk
     * @example
     * // Get one RagChunk
     * const ragChunk = await prisma.ragChunk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RagChunkFindFirstOrThrowArgs>(args?: SelectSubset<T, RagChunkFindFirstOrThrowArgs<ExtArgs>>): Prisma__RagChunkClient<$Result.GetResult<Prisma.$RagChunkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RagChunks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RagChunkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RagChunks
     * const ragChunks = await prisma.ragChunk.findMany()
     * 
     * // Get first 10 RagChunks
     * const ragChunks = await prisma.ragChunk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ragChunkWithIdOnly = await prisma.ragChunk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RagChunkFindManyArgs>(args?: SelectSubset<T, RagChunkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RagChunkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RagChunk.
     * @param {RagChunkCreateArgs} args - Arguments to create a RagChunk.
     * @example
     * // Create one RagChunk
     * const RagChunk = await prisma.ragChunk.create({
     *   data: {
     *     // ... data to create a RagChunk
     *   }
     * })
     * 
     */
    create<T extends RagChunkCreateArgs>(args: SelectSubset<T, RagChunkCreateArgs<ExtArgs>>): Prisma__RagChunkClient<$Result.GetResult<Prisma.$RagChunkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RagChunks.
     * @param {RagChunkCreateManyArgs} args - Arguments to create many RagChunks.
     * @example
     * // Create many RagChunks
     * const ragChunk = await prisma.ragChunk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RagChunkCreateManyArgs>(args?: SelectSubset<T, RagChunkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RagChunks and returns the data saved in the database.
     * @param {RagChunkCreateManyAndReturnArgs} args - Arguments to create many RagChunks.
     * @example
     * // Create many RagChunks
     * const ragChunk = await prisma.ragChunk.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RagChunks and only return the `id`
     * const ragChunkWithIdOnly = await prisma.ragChunk.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RagChunkCreateManyAndReturnArgs>(args?: SelectSubset<T, RagChunkCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RagChunkPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RagChunk.
     * @param {RagChunkDeleteArgs} args - Arguments to delete one RagChunk.
     * @example
     * // Delete one RagChunk
     * const RagChunk = await prisma.ragChunk.delete({
     *   where: {
     *     // ... filter to delete one RagChunk
     *   }
     * })
     * 
     */
    delete<T extends RagChunkDeleteArgs>(args: SelectSubset<T, RagChunkDeleteArgs<ExtArgs>>): Prisma__RagChunkClient<$Result.GetResult<Prisma.$RagChunkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RagChunk.
     * @param {RagChunkUpdateArgs} args - Arguments to update one RagChunk.
     * @example
     * // Update one RagChunk
     * const ragChunk = await prisma.ragChunk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RagChunkUpdateArgs>(args: SelectSubset<T, RagChunkUpdateArgs<ExtArgs>>): Prisma__RagChunkClient<$Result.GetResult<Prisma.$RagChunkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RagChunks.
     * @param {RagChunkDeleteManyArgs} args - Arguments to filter RagChunks to delete.
     * @example
     * // Delete a few RagChunks
     * const { count } = await prisma.ragChunk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RagChunkDeleteManyArgs>(args?: SelectSubset<T, RagChunkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RagChunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RagChunkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RagChunks
     * const ragChunk = await prisma.ragChunk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RagChunkUpdateManyArgs>(args: SelectSubset<T, RagChunkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RagChunks and returns the data updated in the database.
     * @param {RagChunkUpdateManyAndReturnArgs} args - Arguments to update many RagChunks.
     * @example
     * // Update many RagChunks
     * const ragChunk = await prisma.ragChunk.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RagChunks and only return the `id`
     * const ragChunkWithIdOnly = await prisma.ragChunk.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RagChunkUpdateManyAndReturnArgs>(args: SelectSubset<T, RagChunkUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RagChunkPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RagChunk.
     * @param {RagChunkUpsertArgs} args - Arguments to update or create a RagChunk.
     * @example
     * // Update or create a RagChunk
     * const ragChunk = await prisma.ragChunk.upsert({
     *   create: {
     *     // ... data to create a RagChunk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RagChunk we want to update
     *   }
     * })
     */
    upsert<T extends RagChunkUpsertArgs>(args: SelectSubset<T, RagChunkUpsertArgs<ExtArgs>>): Prisma__RagChunkClient<$Result.GetResult<Prisma.$RagChunkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RagChunks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RagChunkCountArgs} args - Arguments to filter RagChunks to count.
     * @example
     * // Count the number of RagChunks
     * const count = await prisma.ragChunk.count({
     *   where: {
     *     // ... the filter for the RagChunks we want to count
     *   }
     * })
    **/
    count<T extends RagChunkCountArgs>(
      args?: Subset<T, RagChunkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RagChunkCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RagChunk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RagChunkAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RagChunkAggregateArgs>(args: Subset<T, RagChunkAggregateArgs>): Prisma.PrismaPromise<GetRagChunkAggregateType<T>>

    /**
     * Group by RagChunk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RagChunkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RagChunkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RagChunkGroupByArgs['orderBy'] }
        : { orderBy?: RagChunkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RagChunkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRagChunkGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RagChunk model
   */
  readonly fields: RagChunkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RagChunk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RagChunkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends RagDocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RagDocumentDefaultArgs<ExtArgs>>): Prisma__RagDocumentClient<$Result.GetResult<Prisma.$RagDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RagChunk model
   */
  interface RagChunkFieldRefs {
    readonly id: FieldRef<"RagChunk", 'Int'>
    readonly documentId: FieldRef<"RagChunk", 'Int'>
    readonly chunkIndex: FieldRef<"RagChunk", 'Int'>
    readonly content: FieldRef<"RagChunk", 'String'>
    readonly pageNumber: FieldRef<"RagChunk", 'Int'>
    readonly searchVector: FieldRef<"RagChunk", 'String'>
  }
    

  // Custom InputTypes
  /**
   * RagChunk findUnique
   */
  export type RagChunkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagChunk
     */
    select?: RagChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagChunk
     */
    omit?: RagChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagChunkInclude<ExtArgs> | null
    /**
     * Filter, which RagChunk to fetch.
     */
    where: RagChunkWhereUniqueInput
  }

  /**
   * RagChunk findUniqueOrThrow
   */
  export type RagChunkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagChunk
     */
    select?: RagChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagChunk
     */
    omit?: RagChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagChunkInclude<ExtArgs> | null
    /**
     * Filter, which RagChunk to fetch.
     */
    where: RagChunkWhereUniqueInput
  }

  /**
   * RagChunk findFirst
   */
  export type RagChunkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagChunk
     */
    select?: RagChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagChunk
     */
    omit?: RagChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagChunkInclude<ExtArgs> | null
    /**
     * Filter, which RagChunk to fetch.
     */
    where?: RagChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RagChunks to fetch.
     */
    orderBy?: RagChunkOrderByWithRelationInput | RagChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RagChunks.
     */
    cursor?: RagChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RagChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RagChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RagChunks.
     */
    distinct?: RagChunkScalarFieldEnum | RagChunkScalarFieldEnum[]
  }

  /**
   * RagChunk findFirstOrThrow
   */
  export type RagChunkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagChunk
     */
    select?: RagChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagChunk
     */
    omit?: RagChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagChunkInclude<ExtArgs> | null
    /**
     * Filter, which RagChunk to fetch.
     */
    where?: RagChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RagChunks to fetch.
     */
    orderBy?: RagChunkOrderByWithRelationInput | RagChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RagChunks.
     */
    cursor?: RagChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RagChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RagChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RagChunks.
     */
    distinct?: RagChunkScalarFieldEnum | RagChunkScalarFieldEnum[]
  }

  /**
   * RagChunk findMany
   */
  export type RagChunkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagChunk
     */
    select?: RagChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagChunk
     */
    omit?: RagChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagChunkInclude<ExtArgs> | null
    /**
     * Filter, which RagChunks to fetch.
     */
    where?: RagChunkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RagChunks to fetch.
     */
    orderBy?: RagChunkOrderByWithRelationInput | RagChunkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RagChunks.
     */
    cursor?: RagChunkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RagChunks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RagChunks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RagChunks.
     */
    distinct?: RagChunkScalarFieldEnum | RagChunkScalarFieldEnum[]
  }

  /**
   * RagChunk create
   */
  export type RagChunkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagChunk
     */
    select?: RagChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagChunk
     */
    omit?: RagChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagChunkInclude<ExtArgs> | null
    /**
     * The data needed to create a RagChunk.
     */
    data: XOR<RagChunkCreateInput, RagChunkUncheckedCreateInput>
  }

  /**
   * RagChunk createMany
   */
  export type RagChunkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RagChunks.
     */
    data: RagChunkCreateManyInput | RagChunkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RagChunk createManyAndReturn
   */
  export type RagChunkCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagChunk
     */
    select?: RagChunkSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RagChunk
     */
    omit?: RagChunkOmit<ExtArgs> | null
    /**
     * The data used to create many RagChunks.
     */
    data: RagChunkCreateManyInput | RagChunkCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagChunkIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RagChunk update
   */
  export type RagChunkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagChunk
     */
    select?: RagChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagChunk
     */
    omit?: RagChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagChunkInclude<ExtArgs> | null
    /**
     * The data needed to update a RagChunk.
     */
    data: XOR<RagChunkUpdateInput, RagChunkUncheckedUpdateInput>
    /**
     * Choose, which RagChunk to update.
     */
    where: RagChunkWhereUniqueInput
  }

  /**
   * RagChunk updateMany
   */
  export type RagChunkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RagChunks.
     */
    data: XOR<RagChunkUpdateManyMutationInput, RagChunkUncheckedUpdateManyInput>
    /**
     * Filter which RagChunks to update
     */
    where?: RagChunkWhereInput
    /**
     * Limit how many RagChunks to update.
     */
    limit?: number
  }

  /**
   * RagChunk updateManyAndReturn
   */
  export type RagChunkUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagChunk
     */
    select?: RagChunkSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RagChunk
     */
    omit?: RagChunkOmit<ExtArgs> | null
    /**
     * The data used to update RagChunks.
     */
    data: XOR<RagChunkUpdateManyMutationInput, RagChunkUncheckedUpdateManyInput>
    /**
     * Filter which RagChunks to update
     */
    where?: RagChunkWhereInput
    /**
     * Limit how many RagChunks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagChunkIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RagChunk upsert
   */
  export type RagChunkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagChunk
     */
    select?: RagChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagChunk
     */
    omit?: RagChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagChunkInclude<ExtArgs> | null
    /**
     * The filter to search for the RagChunk to update in case it exists.
     */
    where: RagChunkWhereUniqueInput
    /**
     * In case the RagChunk found by the `where` argument doesn't exist, create a new RagChunk with this data.
     */
    create: XOR<RagChunkCreateInput, RagChunkUncheckedCreateInput>
    /**
     * In case the RagChunk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RagChunkUpdateInput, RagChunkUncheckedUpdateInput>
  }

  /**
   * RagChunk delete
   */
  export type RagChunkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagChunk
     */
    select?: RagChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagChunk
     */
    omit?: RagChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagChunkInclude<ExtArgs> | null
    /**
     * Filter which RagChunk to delete.
     */
    where: RagChunkWhereUniqueInput
  }

  /**
   * RagChunk deleteMany
   */
  export type RagChunkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RagChunks to delete
     */
    where?: RagChunkWhereInput
    /**
     * Limit how many RagChunks to delete.
     */
    limit?: number
  }

  /**
   * RagChunk without action
   */
  export type RagChunkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagChunk
     */
    select?: RagChunkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagChunk
     */
    omit?: RagChunkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagChunkInclude<ExtArgs> | null
  }


  /**
   * Model RagConversation
   */

  export type AggregateRagConversation = {
    _count: RagConversationCountAggregateOutputType | null
    _avg: RagConversationAvgAggregateOutputType | null
    _sum: RagConversationSumAggregateOutputType | null
    _min: RagConversationMinAggregateOutputType | null
    _max: RagConversationMaxAggregateOutputType | null
  }

  export type RagConversationAvgAggregateOutputType = {
    id: number | null
    documentId: number | null
  }

  export type RagConversationSumAggregateOutputType = {
    id: number | null
    documentId: number | null
  }

  export type RagConversationMinAggregateOutputType = {
    id: number | null
    documentId: number | null
    role: string | null
    content: string | null
    sources: string | null
    createdAt: Date | null
  }

  export type RagConversationMaxAggregateOutputType = {
    id: number | null
    documentId: number | null
    role: string | null
    content: string | null
    sources: string | null
    createdAt: Date | null
  }

  export type RagConversationCountAggregateOutputType = {
    id: number
    documentId: number
    role: number
    content: number
    sources: number
    createdAt: number
    _all: number
  }


  export type RagConversationAvgAggregateInputType = {
    id?: true
    documentId?: true
  }

  export type RagConversationSumAggregateInputType = {
    id?: true
    documentId?: true
  }

  export type RagConversationMinAggregateInputType = {
    id?: true
    documentId?: true
    role?: true
    content?: true
    sources?: true
    createdAt?: true
  }

  export type RagConversationMaxAggregateInputType = {
    id?: true
    documentId?: true
    role?: true
    content?: true
    sources?: true
    createdAt?: true
  }

  export type RagConversationCountAggregateInputType = {
    id?: true
    documentId?: true
    role?: true
    content?: true
    sources?: true
    createdAt?: true
    _all?: true
  }

  export type RagConversationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RagConversation to aggregate.
     */
    where?: RagConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RagConversations to fetch.
     */
    orderBy?: RagConversationOrderByWithRelationInput | RagConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RagConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RagConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RagConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RagConversations
    **/
    _count?: true | RagConversationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RagConversationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RagConversationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RagConversationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RagConversationMaxAggregateInputType
  }

  export type GetRagConversationAggregateType<T extends RagConversationAggregateArgs> = {
        [P in keyof T & keyof AggregateRagConversation]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRagConversation[P]>
      : GetScalarType<T[P], AggregateRagConversation[P]>
  }




  export type RagConversationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RagConversationWhereInput
    orderBy?: RagConversationOrderByWithAggregationInput | RagConversationOrderByWithAggregationInput[]
    by: RagConversationScalarFieldEnum[] | RagConversationScalarFieldEnum
    having?: RagConversationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RagConversationCountAggregateInputType | true
    _avg?: RagConversationAvgAggregateInputType
    _sum?: RagConversationSumAggregateInputType
    _min?: RagConversationMinAggregateInputType
    _max?: RagConversationMaxAggregateInputType
  }

  export type RagConversationGroupByOutputType = {
    id: number
    documentId: number
    role: string
    content: string
    sources: string | null
    createdAt: Date
    _count: RagConversationCountAggregateOutputType | null
    _avg: RagConversationAvgAggregateOutputType | null
    _sum: RagConversationSumAggregateOutputType | null
    _min: RagConversationMinAggregateOutputType | null
    _max: RagConversationMaxAggregateOutputType | null
  }

  type GetRagConversationGroupByPayload<T extends RagConversationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RagConversationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RagConversationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RagConversationGroupByOutputType[P]>
            : GetScalarType<T[P], RagConversationGroupByOutputType[P]>
        }
      >
    >


  export type RagConversationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    role?: boolean
    content?: boolean
    sources?: boolean
    createdAt?: boolean
    document?: boolean | RagDocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ragConversation"]>

  export type RagConversationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    role?: boolean
    content?: boolean
    sources?: boolean
    createdAt?: boolean
    document?: boolean | RagDocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ragConversation"]>

  export type RagConversationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    documentId?: boolean
    role?: boolean
    content?: boolean
    sources?: boolean
    createdAt?: boolean
    document?: boolean | RagDocumentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["ragConversation"]>

  export type RagConversationSelectScalar = {
    id?: boolean
    documentId?: boolean
    role?: boolean
    content?: boolean
    sources?: boolean
    createdAt?: boolean
  }

  export type RagConversationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "documentId" | "role" | "content" | "sources" | "createdAt", ExtArgs["result"]["ragConversation"]>
  export type RagConversationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | RagDocumentDefaultArgs<ExtArgs>
  }
  export type RagConversationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | RagDocumentDefaultArgs<ExtArgs>
  }
  export type RagConversationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    document?: boolean | RagDocumentDefaultArgs<ExtArgs>
  }

  export type $RagConversationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RagConversation"
    objects: {
      document: Prisma.$RagDocumentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      documentId: number
      role: string
      content: string
      sources: string | null
      createdAt: Date
    }, ExtArgs["result"]["ragConversation"]>
    composites: {}
  }

  type RagConversationGetPayload<S extends boolean | null | undefined | RagConversationDefaultArgs> = $Result.GetResult<Prisma.$RagConversationPayload, S>

  type RagConversationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RagConversationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RagConversationCountAggregateInputType | true
    }

  export interface RagConversationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RagConversation'], meta: { name: 'RagConversation' } }
    /**
     * Find zero or one RagConversation that matches the filter.
     * @param {RagConversationFindUniqueArgs} args - Arguments to find a RagConversation
     * @example
     * // Get one RagConversation
     * const ragConversation = await prisma.ragConversation.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RagConversationFindUniqueArgs>(args: SelectSubset<T, RagConversationFindUniqueArgs<ExtArgs>>): Prisma__RagConversationClient<$Result.GetResult<Prisma.$RagConversationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RagConversation that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RagConversationFindUniqueOrThrowArgs} args - Arguments to find a RagConversation
     * @example
     * // Get one RagConversation
     * const ragConversation = await prisma.ragConversation.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RagConversationFindUniqueOrThrowArgs>(args: SelectSubset<T, RagConversationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RagConversationClient<$Result.GetResult<Prisma.$RagConversationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RagConversation that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RagConversationFindFirstArgs} args - Arguments to find a RagConversation
     * @example
     * // Get one RagConversation
     * const ragConversation = await prisma.ragConversation.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RagConversationFindFirstArgs>(args?: SelectSubset<T, RagConversationFindFirstArgs<ExtArgs>>): Prisma__RagConversationClient<$Result.GetResult<Prisma.$RagConversationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RagConversation that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RagConversationFindFirstOrThrowArgs} args - Arguments to find a RagConversation
     * @example
     * // Get one RagConversation
     * const ragConversation = await prisma.ragConversation.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RagConversationFindFirstOrThrowArgs>(args?: SelectSubset<T, RagConversationFindFirstOrThrowArgs<ExtArgs>>): Prisma__RagConversationClient<$Result.GetResult<Prisma.$RagConversationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RagConversations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RagConversationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RagConversations
     * const ragConversations = await prisma.ragConversation.findMany()
     * 
     * // Get first 10 RagConversations
     * const ragConversations = await prisma.ragConversation.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ragConversationWithIdOnly = await prisma.ragConversation.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RagConversationFindManyArgs>(args?: SelectSubset<T, RagConversationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RagConversationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RagConversation.
     * @param {RagConversationCreateArgs} args - Arguments to create a RagConversation.
     * @example
     * // Create one RagConversation
     * const RagConversation = await prisma.ragConversation.create({
     *   data: {
     *     // ... data to create a RagConversation
     *   }
     * })
     * 
     */
    create<T extends RagConversationCreateArgs>(args: SelectSubset<T, RagConversationCreateArgs<ExtArgs>>): Prisma__RagConversationClient<$Result.GetResult<Prisma.$RagConversationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RagConversations.
     * @param {RagConversationCreateManyArgs} args - Arguments to create many RagConversations.
     * @example
     * // Create many RagConversations
     * const ragConversation = await prisma.ragConversation.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RagConversationCreateManyArgs>(args?: SelectSubset<T, RagConversationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RagConversations and returns the data saved in the database.
     * @param {RagConversationCreateManyAndReturnArgs} args - Arguments to create many RagConversations.
     * @example
     * // Create many RagConversations
     * const ragConversation = await prisma.ragConversation.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RagConversations and only return the `id`
     * const ragConversationWithIdOnly = await prisma.ragConversation.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RagConversationCreateManyAndReturnArgs>(args?: SelectSubset<T, RagConversationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RagConversationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RagConversation.
     * @param {RagConversationDeleteArgs} args - Arguments to delete one RagConversation.
     * @example
     * // Delete one RagConversation
     * const RagConversation = await prisma.ragConversation.delete({
     *   where: {
     *     // ... filter to delete one RagConversation
     *   }
     * })
     * 
     */
    delete<T extends RagConversationDeleteArgs>(args: SelectSubset<T, RagConversationDeleteArgs<ExtArgs>>): Prisma__RagConversationClient<$Result.GetResult<Prisma.$RagConversationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RagConversation.
     * @param {RagConversationUpdateArgs} args - Arguments to update one RagConversation.
     * @example
     * // Update one RagConversation
     * const ragConversation = await prisma.ragConversation.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RagConversationUpdateArgs>(args: SelectSubset<T, RagConversationUpdateArgs<ExtArgs>>): Prisma__RagConversationClient<$Result.GetResult<Prisma.$RagConversationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RagConversations.
     * @param {RagConversationDeleteManyArgs} args - Arguments to filter RagConversations to delete.
     * @example
     * // Delete a few RagConversations
     * const { count } = await prisma.ragConversation.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RagConversationDeleteManyArgs>(args?: SelectSubset<T, RagConversationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RagConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RagConversationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RagConversations
     * const ragConversation = await prisma.ragConversation.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RagConversationUpdateManyArgs>(args: SelectSubset<T, RagConversationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RagConversations and returns the data updated in the database.
     * @param {RagConversationUpdateManyAndReturnArgs} args - Arguments to update many RagConversations.
     * @example
     * // Update many RagConversations
     * const ragConversation = await prisma.ragConversation.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RagConversations and only return the `id`
     * const ragConversationWithIdOnly = await prisma.ragConversation.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RagConversationUpdateManyAndReturnArgs>(args: SelectSubset<T, RagConversationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RagConversationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RagConversation.
     * @param {RagConversationUpsertArgs} args - Arguments to update or create a RagConversation.
     * @example
     * // Update or create a RagConversation
     * const ragConversation = await prisma.ragConversation.upsert({
     *   create: {
     *     // ... data to create a RagConversation
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RagConversation we want to update
     *   }
     * })
     */
    upsert<T extends RagConversationUpsertArgs>(args: SelectSubset<T, RagConversationUpsertArgs<ExtArgs>>): Prisma__RagConversationClient<$Result.GetResult<Prisma.$RagConversationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RagConversations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RagConversationCountArgs} args - Arguments to filter RagConversations to count.
     * @example
     * // Count the number of RagConversations
     * const count = await prisma.ragConversation.count({
     *   where: {
     *     // ... the filter for the RagConversations we want to count
     *   }
     * })
    **/
    count<T extends RagConversationCountArgs>(
      args?: Subset<T, RagConversationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RagConversationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RagConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RagConversationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RagConversationAggregateArgs>(args: Subset<T, RagConversationAggregateArgs>): Prisma.PrismaPromise<GetRagConversationAggregateType<T>>

    /**
     * Group by RagConversation.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RagConversationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RagConversationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RagConversationGroupByArgs['orderBy'] }
        : { orderBy?: RagConversationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RagConversationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRagConversationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RagConversation model
   */
  readonly fields: RagConversationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RagConversation.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RagConversationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    document<T extends RagDocumentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RagDocumentDefaultArgs<ExtArgs>>): Prisma__RagDocumentClient<$Result.GetResult<Prisma.$RagDocumentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RagConversation model
   */
  interface RagConversationFieldRefs {
    readonly id: FieldRef<"RagConversation", 'Int'>
    readonly documentId: FieldRef<"RagConversation", 'Int'>
    readonly role: FieldRef<"RagConversation", 'String'>
    readonly content: FieldRef<"RagConversation", 'String'>
    readonly sources: FieldRef<"RagConversation", 'String'>
    readonly createdAt: FieldRef<"RagConversation", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RagConversation findUnique
   */
  export type RagConversationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagConversation
     */
    select?: RagConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagConversation
     */
    omit?: RagConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagConversationInclude<ExtArgs> | null
    /**
     * Filter, which RagConversation to fetch.
     */
    where: RagConversationWhereUniqueInput
  }

  /**
   * RagConversation findUniqueOrThrow
   */
  export type RagConversationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagConversation
     */
    select?: RagConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagConversation
     */
    omit?: RagConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagConversationInclude<ExtArgs> | null
    /**
     * Filter, which RagConversation to fetch.
     */
    where: RagConversationWhereUniqueInput
  }

  /**
   * RagConversation findFirst
   */
  export type RagConversationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagConversation
     */
    select?: RagConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagConversation
     */
    omit?: RagConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagConversationInclude<ExtArgs> | null
    /**
     * Filter, which RagConversation to fetch.
     */
    where?: RagConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RagConversations to fetch.
     */
    orderBy?: RagConversationOrderByWithRelationInput | RagConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RagConversations.
     */
    cursor?: RagConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RagConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RagConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RagConversations.
     */
    distinct?: RagConversationScalarFieldEnum | RagConversationScalarFieldEnum[]
  }

  /**
   * RagConversation findFirstOrThrow
   */
  export type RagConversationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagConversation
     */
    select?: RagConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagConversation
     */
    omit?: RagConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagConversationInclude<ExtArgs> | null
    /**
     * Filter, which RagConversation to fetch.
     */
    where?: RagConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RagConversations to fetch.
     */
    orderBy?: RagConversationOrderByWithRelationInput | RagConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RagConversations.
     */
    cursor?: RagConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RagConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RagConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RagConversations.
     */
    distinct?: RagConversationScalarFieldEnum | RagConversationScalarFieldEnum[]
  }

  /**
   * RagConversation findMany
   */
  export type RagConversationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagConversation
     */
    select?: RagConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagConversation
     */
    omit?: RagConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagConversationInclude<ExtArgs> | null
    /**
     * Filter, which RagConversations to fetch.
     */
    where?: RagConversationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RagConversations to fetch.
     */
    orderBy?: RagConversationOrderByWithRelationInput | RagConversationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RagConversations.
     */
    cursor?: RagConversationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RagConversations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RagConversations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RagConversations.
     */
    distinct?: RagConversationScalarFieldEnum | RagConversationScalarFieldEnum[]
  }

  /**
   * RagConversation create
   */
  export type RagConversationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagConversation
     */
    select?: RagConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagConversation
     */
    omit?: RagConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagConversationInclude<ExtArgs> | null
    /**
     * The data needed to create a RagConversation.
     */
    data: XOR<RagConversationCreateInput, RagConversationUncheckedCreateInput>
  }

  /**
   * RagConversation createMany
   */
  export type RagConversationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RagConversations.
     */
    data: RagConversationCreateManyInput | RagConversationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RagConversation createManyAndReturn
   */
  export type RagConversationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagConversation
     */
    select?: RagConversationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RagConversation
     */
    omit?: RagConversationOmit<ExtArgs> | null
    /**
     * The data used to create many RagConversations.
     */
    data: RagConversationCreateManyInput | RagConversationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagConversationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RagConversation update
   */
  export type RagConversationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagConversation
     */
    select?: RagConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagConversation
     */
    omit?: RagConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagConversationInclude<ExtArgs> | null
    /**
     * The data needed to update a RagConversation.
     */
    data: XOR<RagConversationUpdateInput, RagConversationUncheckedUpdateInput>
    /**
     * Choose, which RagConversation to update.
     */
    where: RagConversationWhereUniqueInput
  }

  /**
   * RagConversation updateMany
   */
  export type RagConversationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RagConversations.
     */
    data: XOR<RagConversationUpdateManyMutationInput, RagConversationUncheckedUpdateManyInput>
    /**
     * Filter which RagConversations to update
     */
    where?: RagConversationWhereInput
    /**
     * Limit how many RagConversations to update.
     */
    limit?: number
  }

  /**
   * RagConversation updateManyAndReturn
   */
  export type RagConversationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagConversation
     */
    select?: RagConversationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RagConversation
     */
    omit?: RagConversationOmit<ExtArgs> | null
    /**
     * The data used to update RagConversations.
     */
    data: XOR<RagConversationUpdateManyMutationInput, RagConversationUncheckedUpdateManyInput>
    /**
     * Filter which RagConversations to update
     */
    where?: RagConversationWhereInput
    /**
     * Limit how many RagConversations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagConversationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RagConversation upsert
   */
  export type RagConversationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagConversation
     */
    select?: RagConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagConversation
     */
    omit?: RagConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagConversationInclude<ExtArgs> | null
    /**
     * The filter to search for the RagConversation to update in case it exists.
     */
    where: RagConversationWhereUniqueInput
    /**
     * In case the RagConversation found by the `where` argument doesn't exist, create a new RagConversation with this data.
     */
    create: XOR<RagConversationCreateInput, RagConversationUncheckedCreateInput>
    /**
     * In case the RagConversation was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RagConversationUpdateInput, RagConversationUncheckedUpdateInput>
  }

  /**
   * RagConversation delete
   */
  export type RagConversationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagConversation
     */
    select?: RagConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagConversation
     */
    omit?: RagConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagConversationInclude<ExtArgs> | null
    /**
     * Filter which RagConversation to delete.
     */
    where: RagConversationWhereUniqueInput
  }

  /**
   * RagConversation deleteMany
   */
  export type RagConversationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RagConversations to delete
     */
    where?: RagConversationWhereInput
    /**
     * Limit how many RagConversations to delete.
     */
    limit?: number
  }

  /**
   * RagConversation without action
   */
  export type RagConversationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagConversation
     */
    select?: RagConversationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagConversation
     */
    omit?: RagConversationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagConversationInclude<ExtArgs> | null
  }


  /**
   * Model CodeReview
   */

  export type AggregateCodeReview = {
    _count: CodeReviewCountAggregateOutputType | null
    _avg: CodeReviewAvgAggregateOutputType | null
    _sum: CodeReviewSumAggregateOutputType | null
    _min: CodeReviewMinAggregateOutputType | null
    _max: CodeReviewMaxAggregateOutputType | null
  }

  export type CodeReviewAvgAggregateOutputType = {
    id: number | null
    bugCount: number | null
    securityCount: number | null
    perfCount: number | null
    qualityCount: number | null
    bestPracticeCount: number | null
  }

  export type CodeReviewSumAggregateOutputType = {
    id: number | null
    bugCount: number | null
    securityCount: number | null
    perfCount: number | null
    qualityCount: number | null
    bestPracticeCount: number | null
  }

  export type CodeReviewMinAggregateOutputType = {
    id: number | null
    language: string | null
    code: string | null
    summary: string | null
    findings: string | null
    overallSeverity: string | null
    bugCount: number | null
    securityCount: number | null
    perfCount: number | null
    qualityCount: number | null
    bestPracticeCount: number | null
    status: string | null
    createdAt: Date | null
  }

  export type CodeReviewMaxAggregateOutputType = {
    id: number | null
    language: string | null
    code: string | null
    summary: string | null
    findings: string | null
    overallSeverity: string | null
    bugCount: number | null
    securityCount: number | null
    perfCount: number | null
    qualityCount: number | null
    bestPracticeCount: number | null
    status: string | null
    createdAt: Date | null
  }

  export type CodeReviewCountAggregateOutputType = {
    id: number
    language: number
    code: number
    summary: number
    findings: number
    overallSeverity: number
    bugCount: number
    securityCount: number
    perfCount: number
    qualityCount: number
    bestPracticeCount: number
    status: number
    createdAt: number
    _all: number
  }


  export type CodeReviewAvgAggregateInputType = {
    id?: true
    bugCount?: true
    securityCount?: true
    perfCount?: true
    qualityCount?: true
    bestPracticeCount?: true
  }

  export type CodeReviewSumAggregateInputType = {
    id?: true
    bugCount?: true
    securityCount?: true
    perfCount?: true
    qualityCount?: true
    bestPracticeCount?: true
  }

  export type CodeReviewMinAggregateInputType = {
    id?: true
    language?: true
    code?: true
    summary?: true
    findings?: true
    overallSeverity?: true
    bugCount?: true
    securityCount?: true
    perfCount?: true
    qualityCount?: true
    bestPracticeCount?: true
    status?: true
    createdAt?: true
  }

  export type CodeReviewMaxAggregateInputType = {
    id?: true
    language?: true
    code?: true
    summary?: true
    findings?: true
    overallSeverity?: true
    bugCount?: true
    securityCount?: true
    perfCount?: true
    qualityCount?: true
    bestPracticeCount?: true
    status?: true
    createdAt?: true
  }

  export type CodeReviewCountAggregateInputType = {
    id?: true
    language?: true
    code?: true
    summary?: true
    findings?: true
    overallSeverity?: true
    bugCount?: true
    securityCount?: true
    perfCount?: true
    qualityCount?: true
    bestPracticeCount?: true
    status?: true
    createdAt?: true
    _all?: true
  }

  export type CodeReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeReview to aggregate.
     */
    where?: CodeReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeReviews to fetch.
     */
    orderBy?: CodeReviewOrderByWithRelationInput | CodeReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CodeReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CodeReviews
    **/
    _count?: true | CodeReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CodeReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CodeReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CodeReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CodeReviewMaxAggregateInputType
  }

  export type GetCodeReviewAggregateType<T extends CodeReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateCodeReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCodeReview[P]>
      : GetScalarType<T[P], AggregateCodeReview[P]>
  }




  export type CodeReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CodeReviewWhereInput
    orderBy?: CodeReviewOrderByWithAggregationInput | CodeReviewOrderByWithAggregationInput[]
    by: CodeReviewScalarFieldEnum[] | CodeReviewScalarFieldEnum
    having?: CodeReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CodeReviewCountAggregateInputType | true
    _avg?: CodeReviewAvgAggregateInputType
    _sum?: CodeReviewSumAggregateInputType
    _min?: CodeReviewMinAggregateInputType
    _max?: CodeReviewMaxAggregateInputType
  }

  export type CodeReviewGroupByOutputType = {
    id: number
    language: string
    code: string
    summary: string | null
    findings: string | null
    overallSeverity: string | null
    bugCount: number
    securityCount: number
    perfCount: number
    qualityCount: number
    bestPracticeCount: number
    status: string
    createdAt: Date
    _count: CodeReviewCountAggregateOutputType | null
    _avg: CodeReviewAvgAggregateOutputType | null
    _sum: CodeReviewSumAggregateOutputType | null
    _min: CodeReviewMinAggregateOutputType | null
    _max: CodeReviewMaxAggregateOutputType | null
  }

  type GetCodeReviewGroupByPayload<T extends CodeReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CodeReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CodeReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CodeReviewGroupByOutputType[P]>
            : GetScalarType<T[P], CodeReviewGroupByOutputType[P]>
        }
      >
    >


  export type CodeReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    language?: boolean
    code?: boolean
    summary?: boolean
    findings?: boolean
    overallSeverity?: boolean
    bugCount?: boolean
    securityCount?: boolean
    perfCount?: boolean
    qualityCount?: boolean
    bestPracticeCount?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["codeReview"]>

  export type CodeReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    language?: boolean
    code?: boolean
    summary?: boolean
    findings?: boolean
    overallSeverity?: boolean
    bugCount?: boolean
    securityCount?: boolean
    perfCount?: boolean
    qualityCount?: boolean
    bestPracticeCount?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["codeReview"]>

  export type CodeReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    language?: boolean
    code?: boolean
    summary?: boolean
    findings?: boolean
    overallSeverity?: boolean
    bugCount?: boolean
    securityCount?: boolean
    perfCount?: boolean
    qualityCount?: boolean
    bestPracticeCount?: boolean
    status?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["codeReview"]>

  export type CodeReviewSelectScalar = {
    id?: boolean
    language?: boolean
    code?: boolean
    summary?: boolean
    findings?: boolean
    overallSeverity?: boolean
    bugCount?: boolean
    securityCount?: boolean
    perfCount?: boolean
    qualityCount?: boolean
    bestPracticeCount?: boolean
    status?: boolean
    createdAt?: boolean
  }

  export type CodeReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "language" | "code" | "summary" | "findings" | "overallSeverity" | "bugCount" | "securityCount" | "perfCount" | "qualityCount" | "bestPracticeCount" | "status" | "createdAt", ExtArgs["result"]["codeReview"]>

  export type $CodeReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CodeReview"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      language: string
      code: string
      summary: string | null
      findings: string | null
      overallSeverity: string | null
      bugCount: number
      securityCount: number
      perfCount: number
      qualityCount: number
      bestPracticeCount: number
      status: string
      createdAt: Date
    }, ExtArgs["result"]["codeReview"]>
    composites: {}
  }

  type CodeReviewGetPayload<S extends boolean | null | undefined | CodeReviewDefaultArgs> = $Result.GetResult<Prisma.$CodeReviewPayload, S>

  type CodeReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CodeReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CodeReviewCountAggregateInputType | true
    }

  export interface CodeReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CodeReview'], meta: { name: 'CodeReview' } }
    /**
     * Find zero or one CodeReview that matches the filter.
     * @param {CodeReviewFindUniqueArgs} args - Arguments to find a CodeReview
     * @example
     * // Get one CodeReview
     * const codeReview = await prisma.codeReview.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CodeReviewFindUniqueArgs>(args: SelectSubset<T, CodeReviewFindUniqueArgs<ExtArgs>>): Prisma__CodeReviewClient<$Result.GetResult<Prisma.$CodeReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CodeReview that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CodeReviewFindUniqueOrThrowArgs} args - Arguments to find a CodeReview
     * @example
     * // Get one CodeReview
     * const codeReview = await prisma.codeReview.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CodeReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, CodeReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CodeReviewClient<$Result.GetResult<Prisma.$CodeReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeReview that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeReviewFindFirstArgs} args - Arguments to find a CodeReview
     * @example
     * // Get one CodeReview
     * const codeReview = await prisma.codeReview.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CodeReviewFindFirstArgs>(args?: SelectSubset<T, CodeReviewFindFirstArgs<ExtArgs>>): Prisma__CodeReviewClient<$Result.GetResult<Prisma.$CodeReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CodeReview that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeReviewFindFirstOrThrowArgs} args - Arguments to find a CodeReview
     * @example
     * // Get one CodeReview
     * const codeReview = await prisma.codeReview.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CodeReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, CodeReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__CodeReviewClient<$Result.GetResult<Prisma.$CodeReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CodeReviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CodeReviews
     * const codeReviews = await prisma.codeReview.findMany()
     * 
     * // Get first 10 CodeReviews
     * const codeReviews = await prisma.codeReview.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const codeReviewWithIdOnly = await prisma.codeReview.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CodeReviewFindManyArgs>(args?: SelectSubset<T, CodeReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CodeReview.
     * @param {CodeReviewCreateArgs} args - Arguments to create a CodeReview.
     * @example
     * // Create one CodeReview
     * const CodeReview = await prisma.codeReview.create({
     *   data: {
     *     // ... data to create a CodeReview
     *   }
     * })
     * 
     */
    create<T extends CodeReviewCreateArgs>(args: SelectSubset<T, CodeReviewCreateArgs<ExtArgs>>): Prisma__CodeReviewClient<$Result.GetResult<Prisma.$CodeReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CodeReviews.
     * @param {CodeReviewCreateManyArgs} args - Arguments to create many CodeReviews.
     * @example
     * // Create many CodeReviews
     * const codeReview = await prisma.codeReview.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CodeReviewCreateManyArgs>(args?: SelectSubset<T, CodeReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CodeReviews and returns the data saved in the database.
     * @param {CodeReviewCreateManyAndReturnArgs} args - Arguments to create many CodeReviews.
     * @example
     * // Create many CodeReviews
     * const codeReview = await prisma.codeReview.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CodeReviews and only return the `id`
     * const codeReviewWithIdOnly = await prisma.codeReview.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CodeReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, CodeReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CodeReview.
     * @param {CodeReviewDeleteArgs} args - Arguments to delete one CodeReview.
     * @example
     * // Delete one CodeReview
     * const CodeReview = await prisma.codeReview.delete({
     *   where: {
     *     // ... filter to delete one CodeReview
     *   }
     * })
     * 
     */
    delete<T extends CodeReviewDeleteArgs>(args: SelectSubset<T, CodeReviewDeleteArgs<ExtArgs>>): Prisma__CodeReviewClient<$Result.GetResult<Prisma.$CodeReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CodeReview.
     * @param {CodeReviewUpdateArgs} args - Arguments to update one CodeReview.
     * @example
     * // Update one CodeReview
     * const codeReview = await prisma.codeReview.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CodeReviewUpdateArgs>(args: SelectSubset<T, CodeReviewUpdateArgs<ExtArgs>>): Prisma__CodeReviewClient<$Result.GetResult<Prisma.$CodeReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CodeReviews.
     * @param {CodeReviewDeleteManyArgs} args - Arguments to filter CodeReviews to delete.
     * @example
     * // Delete a few CodeReviews
     * const { count } = await prisma.codeReview.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CodeReviewDeleteManyArgs>(args?: SelectSubset<T, CodeReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CodeReviews
     * const codeReview = await prisma.codeReview.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CodeReviewUpdateManyArgs>(args: SelectSubset<T, CodeReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CodeReviews and returns the data updated in the database.
     * @param {CodeReviewUpdateManyAndReturnArgs} args - Arguments to update many CodeReviews.
     * @example
     * // Update many CodeReviews
     * const codeReview = await prisma.codeReview.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CodeReviews and only return the `id`
     * const codeReviewWithIdOnly = await prisma.codeReview.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CodeReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, CodeReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CodeReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CodeReview.
     * @param {CodeReviewUpsertArgs} args - Arguments to update or create a CodeReview.
     * @example
     * // Update or create a CodeReview
     * const codeReview = await prisma.codeReview.upsert({
     *   create: {
     *     // ... data to create a CodeReview
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CodeReview we want to update
     *   }
     * })
     */
    upsert<T extends CodeReviewUpsertArgs>(args: SelectSubset<T, CodeReviewUpsertArgs<ExtArgs>>): Prisma__CodeReviewClient<$Result.GetResult<Prisma.$CodeReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CodeReviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeReviewCountArgs} args - Arguments to filter CodeReviews to count.
     * @example
     * // Count the number of CodeReviews
     * const count = await prisma.codeReview.count({
     *   where: {
     *     // ... the filter for the CodeReviews we want to count
     *   }
     * })
    **/
    count<T extends CodeReviewCountArgs>(
      args?: Subset<T, CodeReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CodeReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CodeReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CodeReviewAggregateArgs>(args: Subset<T, CodeReviewAggregateArgs>): Prisma.PrismaPromise<GetCodeReviewAggregateType<T>>

    /**
     * Group by CodeReview.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CodeReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CodeReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CodeReviewGroupByArgs['orderBy'] }
        : { orderBy?: CodeReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CodeReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCodeReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CodeReview model
   */
  readonly fields: CodeReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CodeReview.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CodeReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CodeReview model
   */
  interface CodeReviewFieldRefs {
    readonly id: FieldRef<"CodeReview", 'Int'>
    readonly language: FieldRef<"CodeReview", 'String'>
    readonly code: FieldRef<"CodeReview", 'String'>
    readonly summary: FieldRef<"CodeReview", 'String'>
    readonly findings: FieldRef<"CodeReview", 'String'>
    readonly overallSeverity: FieldRef<"CodeReview", 'String'>
    readonly bugCount: FieldRef<"CodeReview", 'Int'>
    readonly securityCount: FieldRef<"CodeReview", 'Int'>
    readonly perfCount: FieldRef<"CodeReview", 'Int'>
    readonly qualityCount: FieldRef<"CodeReview", 'Int'>
    readonly bestPracticeCount: FieldRef<"CodeReview", 'Int'>
    readonly status: FieldRef<"CodeReview", 'String'>
    readonly createdAt: FieldRef<"CodeReview", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CodeReview findUnique
   */
  export type CodeReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeReview
     */
    select?: CodeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeReview
     */
    omit?: CodeReviewOmit<ExtArgs> | null
    /**
     * Filter, which CodeReview to fetch.
     */
    where: CodeReviewWhereUniqueInput
  }

  /**
   * CodeReview findUniqueOrThrow
   */
  export type CodeReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeReview
     */
    select?: CodeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeReview
     */
    omit?: CodeReviewOmit<ExtArgs> | null
    /**
     * Filter, which CodeReview to fetch.
     */
    where: CodeReviewWhereUniqueInput
  }

  /**
   * CodeReview findFirst
   */
  export type CodeReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeReview
     */
    select?: CodeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeReview
     */
    omit?: CodeReviewOmit<ExtArgs> | null
    /**
     * Filter, which CodeReview to fetch.
     */
    where?: CodeReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeReviews to fetch.
     */
    orderBy?: CodeReviewOrderByWithRelationInput | CodeReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeReviews.
     */
    cursor?: CodeReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeReviews.
     */
    distinct?: CodeReviewScalarFieldEnum | CodeReviewScalarFieldEnum[]
  }

  /**
   * CodeReview findFirstOrThrow
   */
  export type CodeReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeReview
     */
    select?: CodeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeReview
     */
    omit?: CodeReviewOmit<ExtArgs> | null
    /**
     * Filter, which CodeReview to fetch.
     */
    where?: CodeReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeReviews to fetch.
     */
    orderBy?: CodeReviewOrderByWithRelationInput | CodeReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CodeReviews.
     */
    cursor?: CodeReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeReviews.
     */
    distinct?: CodeReviewScalarFieldEnum | CodeReviewScalarFieldEnum[]
  }

  /**
   * CodeReview findMany
   */
  export type CodeReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeReview
     */
    select?: CodeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeReview
     */
    omit?: CodeReviewOmit<ExtArgs> | null
    /**
     * Filter, which CodeReviews to fetch.
     */
    where?: CodeReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CodeReviews to fetch.
     */
    orderBy?: CodeReviewOrderByWithRelationInput | CodeReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CodeReviews.
     */
    cursor?: CodeReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CodeReviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CodeReviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CodeReviews.
     */
    distinct?: CodeReviewScalarFieldEnum | CodeReviewScalarFieldEnum[]
  }

  /**
   * CodeReview create
   */
  export type CodeReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeReview
     */
    select?: CodeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeReview
     */
    omit?: CodeReviewOmit<ExtArgs> | null
    /**
     * The data needed to create a CodeReview.
     */
    data: XOR<CodeReviewCreateInput, CodeReviewUncheckedCreateInput>
  }

  /**
   * CodeReview createMany
   */
  export type CodeReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CodeReviews.
     */
    data: CodeReviewCreateManyInput | CodeReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CodeReview createManyAndReturn
   */
  export type CodeReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeReview
     */
    select?: CodeReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodeReview
     */
    omit?: CodeReviewOmit<ExtArgs> | null
    /**
     * The data used to create many CodeReviews.
     */
    data: CodeReviewCreateManyInput | CodeReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CodeReview update
   */
  export type CodeReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeReview
     */
    select?: CodeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeReview
     */
    omit?: CodeReviewOmit<ExtArgs> | null
    /**
     * The data needed to update a CodeReview.
     */
    data: XOR<CodeReviewUpdateInput, CodeReviewUncheckedUpdateInput>
    /**
     * Choose, which CodeReview to update.
     */
    where: CodeReviewWhereUniqueInput
  }

  /**
   * CodeReview updateMany
   */
  export type CodeReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CodeReviews.
     */
    data: XOR<CodeReviewUpdateManyMutationInput, CodeReviewUncheckedUpdateManyInput>
    /**
     * Filter which CodeReviews to update
     */
    where?: CodeReviewWhereInput
    /**
     * Limit how many CodeReviews to update.
     */
    limit?: number
  }

  /**
   * CodeReview updateManyAndReturn
   */
  export type CodeReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeReview
     */
    select?: CodeReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CodeReview
     */
    omit?: CodeReviewOmit<ExtArgs> | null
    /**
     * The data used to update CodeReviews.
     */
    data: XOR<CodeReviewUpdateManyMutationInput, CodeReviewUncheckedUpdateManyInput>
    /**
     * Filter which CodeReviews to update
     */
    where?: CodeReviewWhereInput
    /**
     * Limit how many CodeReviews to update.
     */
    limit?: number
  }

  /**
   * CodeReview upsert
   */
  export type CodeReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeReview
     */
    select?: CodeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeReview
     */
    omit?: CodeReviewOmit<ExtArgs> | null
    /**
     * The filter to search for the CodeReview to update in case it exists.
     */
    where: CodeReviewWhereUniqueInput
    /**
     * In case the CodeReview found by the `where` argument doesn't exist, create a new CodeReview with this data.
     */
    create: XOR<CodeReviewCreateInput, CodeReviewUncheckedCreateInput>
    /**
     * In case the CodeReview was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CodeReviewUpdateInput, CodeReviewUncheckedUpdateInput>
  }

  /**
   * CodeReview delete
   */
  export type CodeReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeReview
     */
    select?: CodeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeReview
     */
    omit?: CodeReviewOmit<ExtArgs> | null
    /**
     * Filter which CodeReview to delete.
     */
    where: CodeReviewWhereUniqueInput
  }

  /**
   * CodeReview deleteMany
   */
  export type CodeReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CodeReviews to delete
     */
    where?: CodeReviewWhereInput
    /**
     * Limit how many CodeReviews to delete.
     */
    limit?: number
  }

  /**
   * CodeReview without action
   */
  export type CodeReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CodeReview
     */
    select?: CodeReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CodeReview
     */
    omit?: CodeReviewOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    name: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    email: string
    password: string
    name: string | null
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
    documents?: boolean | User$documentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    documents?: boolean | User$documentsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      documents: Prisma.$RagDocumentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      name: string | null
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    documents<T extends User$documentsArgs<ExtArgs> = {}>(args?: Subset<T, User$documentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RagDocumentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.documents
   */
  export type User$documentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RagDocument
     */
    select?: RagDocumentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RagDocument
     */
    omit?: RagDocumentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RagDocumentInclude<ExtArgs> | null
    where?: RagDocumentWhereInput
    orderBy?: RagDocumentOrderByWithRelationInput | RagDocumentOrderByWithRelationInput[]
    cursor?: RagDocumentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RagDocumentScalarFieldEnum | RagDocumentScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RagDocumentScalarFieldEnum: {
    id: 'id',
    filename: 'filename',
    originalName: 'originalName',
    pageCount: 'pageCount',
    chunkCount: 'chunkCount',
    status: 'status',
    createdAt: 'createdAt',
    userId: 'userId'
  };

  export type RagDocumentScalarFieldEnum = (typeof RagDocumentScalarFieldEnum)[keyof typeof RagDocumentScalarFieldEnum]


  export const RagChunkScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    chunkIndex: 'chunkIndex',
    content: 'content',
    pageNumber: 'pageNumber',
    searchVector: 'searchVector'
  };

  export type RagChunkScalarFieldEnum = (typeof RagChunkScalarFieldEnum)[keyof typeof RagChunkScalarFieldEnum]


  export const RagConversationScalarFieldEnum: {
    id: 'id',
    documentId: 'documentId',
    role: 'role',
    content: 'content',
    sources: 'sources',
    createdAt: 'createdAt'
  };

  export type RagConversationScalarFieldEnum = (typeof RagConversationScalarFieldEnum)[keyof typeof RagConversationScalarFieldEnum]


  export const CodeReviewScalarFieldEnum: {
    id: 'id',
    language: 'language',
    code: 'code',
    summary: 'summary',
    findings: 'findings',
    overallSeverity: 'overallSeverity',
    bugCount: 'bugCount',
    securityCount: 'securityCount',
    perfCount: 'perfCount',
    qualityCount: 'qualityCount',
    bestPracticeCount: 'bestPracticeCount',
    status: 'status',
    createdAt: 'createdAt'
  };

  export type CodeReviewScalarFieldEnum = (typeof CodeReviewScalarFieldEnum)[keyof typeof CodeReviewScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RagDocumentWhereInput = {
    AND?: RagDocumentWhereInput | RagDocumentWhereInput[]
    OR?: RagDocumentWhereInput[]
    NOT?: RagDocumentWhereInput | RagDocumentWhereInput[]
    id?: IntFilter<"RagDocument"> | number
    filename?: StringFilter<"RagDocument"> | string
    originalName?: StringFilter<"RagDocument"> | string
    pageCount?: IntNullableFilter<"RagDocument"> | number | null
    chunkCount?: IntFilter<"RagDocument"> | number
    status?: StringFilter<"RagDocument"> | string
    createdAt?: DateTimeFilter<"RagDocument"> | Date | string
    userId?: IntNullableFilter<"RagDocument"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    chunks?: RagChunkListRelationFilter
    conversations?: RagConversationListRelationFilter
  }

  export type RagDocumentOrderByWithRelationInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    pageCount?: SortOrderInput | SortOrder
    chunkCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    chunks?: RagChunkOrderByRelationAggregateInput
    conversations?: RagConversationOrderByRelationAggregateInput
  }

  export type RagDocumentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RagDocumentWhereInput | RagDocumentWhereInput[]
    OR?: RagDocumentWhereInput[]
    NOT?: RagDocumentWhereInput | RagDocumentWhereInput[]
    filename?: StringFilter<"RagDocument"> | string
    originalName?: StringFilter<"RagDocument"> | string
    pageCount?: IntNullableFilter<"RagDocument"> | number | null
    chunkCount?: IntFilter<"RagDocument"> | number
    status?: StringFilter<"RagDocument"> | string
    createdAt?: DateTimeFilter<"RagDocument"> | Date | string
    userId?: IntNullableFilter<"RagDocument"> | number | null
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    chunks?: RagChunkListRelationFilter
    conversations?: RagConversationListRelationFilter
  }, "id">

  export type RagDocumentOrderByWithAggregationInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    pageCount?: SortOrderInput | SortOrder
    chunkCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrderInput | SortOrder
    _count?: RagDocumentCountOrderByAggregateInput
    _avg?: RagDocumentAvgOrderByAggregateInput
    _max?: RagDocumentMaxOrderByAggregateInput
    _min?: RagDocumentMinOrderByAggregateInput
    _sum?: RagDocumentSumOrderByAggregateInput
  }

  export type RagDocumentScalarWhereWithAggregatesInput = {
    AND?: RagDocumentScalarWhereWithAggregatesInput | RagDocumentScalarWhereWithAggregatesInput[]
    OR?: RagDocumentScalarWhereWithAggregatesInput[]
    NOT?: RagDocumentScalarWhereWithAggregatesInput | RagDocumentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RagDocument"> | number
    filename?: StringWithAggregatesFilter<"RagDocument"> | string
    originalName?: StringWithAggregatesFilter<"RagDocument"> | string
    pageCount?: IntNullableWithAggregatesFilter<"RagDocument"> | number | null
    chunkCount?: IntWithAggregatesFilter<"RagDocument"> | number
    status?: StringWithAggregatesFilter<"RagDocument"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RagDocument"> | Date | string
    userId?: IntNullableWithAggregatesFilter<"RagDocument"> | number | null
  }

  export type RagChunkWhereInput = {
    AND?: RagChunkWhereInput | RagChunkWhereInput[]
    OR?: RagChunkWhereInput[]
    NOT?: RagChunkWhereInput | RagChunkWhereInput[]
    id?: IntFilter<"RagChunk"> | number
    documentId?: IntFilter<"RagChunk"> | number
    chunkIndex?: IntFilter<"RagChunk"> | number
    content?: StringFilter<"RagChunk"> | string
    pageNumber?: IntNullableFilter<"RagChunk"> | number | null
    searchVector?: StringNullableFilter<"RagChunk"> | string | null
    document?: XOR<RagDocumentScalarRelationFilter, RagDocumentWhereInput>
  }

  export type RagChunkOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    chunkIndex?: SortOrder
    content?: SortOrder
    pageNumber?: SortOrderInput | SortOrder
    searchVector?: SortOrderInput | SortOrder
    document?: RagDocumentOrderByWithRelationInput
  }

  export type RagChunkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RagChunkWhereInput | RagChunkWhereInput[]
    OR?: RagChunkWhereInput[]
    NOT?: RagChunkWhereInput | RagChunkWhereInput[]
    documentId?: IntFilter<"RagChunk"> | number
    chunkIndex?: IntFilter<"RagChunk"> | number
    content?: StringFilter<"RagChunk"> | string
    pageNumber?: IntNullableFilter<"RagChunk"> | number | null
    searchVector?: StringNullableFilter<"RagChunk"> | string | null
    document?: XOR<RagDocumentScalarRelationFilter, RagDocumentWhereInput>
  }, "id">

  export type RagChunkOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    chunkIndex?: SortOrder
    content?: SortOrder
    pageNumber?: SortOrderInput | SortOrder
    searchVector?: SortOrderInput | SortOrder
    _count?: RagChunkCountOrderByAggregateInput
    _avg?: RagChunkAvgOrderByAggregateInput
    _max?: RagChunkMaxOrderByAggregateInput
    _min?: RagChunkMinOrderByAggregateInput
    _sum?: RagChunkSumOrderByAggregateInput
  }

  export type RagChunkScalarWhereWithAggregatesInput = {
    AND?: RagChunkScalarWhereWithAggregatesInput | RagChunkScalarWhereWithAggregatesInput[]
    OR?: RagChunkScalarWhereWithAggregatesInput[]
    NOT?: RagChunkScalarWhereWithAggregatesInput | RagChunkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RagChunk"> | number
    documentId?: IntWithAggregatesFilter<"RagChunk"> | number
    chunkIndex?: IntWithAggregatesFilter<"RagChunk"> | number
    content?: StringWithAggregatesFilter<"RagChunk"> | string
    pageNumber?: IntNullableWithAggregatesFilter<"RagChunk"> | number | null
    searchVector?: StringNullableWithAggregatesFilter<"RagChunk"> | string | null
  }

  export type RagConversationWhereInput = {
    AND?: RagConversationWhereInput | RagConversationWhereInput[]
    OR?: RagConversationWhereInput[]
    NOT?: RagConversationWhereInput | RagConversationWhereInput[]
    id?: IntFilter<"RagConversation"> | number
    documentId?: IntFilter<"RagConversation"> | number
    role?: StringFilter<"RagConversation"> | string
    content?: StringFilter<"RagConversation"> | string
    sources?: StringNullableFilter<"RagConversation"> | string | null
    createdAt?: DateTimeFilter<"RagConversation"> | Date | string
    document?: XOR<RagDocumentScalarRelationFilter, RagDocumentWhereInput>
  }

  export type RagConversationOrderByWithRelationInput = {
    id?: SortOrder
    documentId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    sources?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    document?: RagDocumentOrderByWithRelationInput
  }

  export type RagConversationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RagConversationWhereInput | RagConversationWhereInput[]
    OR?: RagConversationWhereInput[]
    NOT?: RagConversationWhereInput | RagConversationWhereInput[]
    documentId?: IntFilter<"RagConversation"> | number
    role?: StringFilter<"RagConversation"> | string
    content?: StringFilter<"RagConversation"> | string
    sources?: StringNullableFilter<"RagConversation"> | string | null
    createdAt?: DateTimeFilter<"RagConversation"> | Date | string
    document?: XOR<RagDocumentScalarRelationFilter, RagDocumentWhereInput>
  }, "id">

  export type RagConversationOrderByWithAggregationInput = {
    id?: SortOrder
    documentId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    sources?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: RagConversationCountOrderByAggregateInput
    _avg?: RagConversationAvgOrderByAggregateInput
    _max?: RagConversationMaxOrderByAggregateInput
    _min?: RagConversationMinOrderByAggregateInput
    _sum?: RagConversationSumOrderByAggregateInput
  }

  export type RagConversationScalarWhereWithAggregatesInput = {
    AND?: RagConversationScalarWhereWithAggregatesInput | RagConversationScalarWhereWithAggregatesInput[]
    OR?: RagConversationScalarWhereWithAggregatesInput[]
    NOT?: RagConversationScalarWhereWithAggregatesInput | RagConversationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"RagConversation"> | number
    documentId?: IntWithAggregatesFilter<"RagConversation"> | number
    role?: StringWithAggregatesFilter<"RagConversation"> | string
    content?: StringWithAggregatesFilter<"RagConversation"> | string
    sources?: StringNullableWithAggregatesFilter<"RagConversation"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"RagConversation"> | Date | string
  }

  export type CodeReviewWhereInput = {
    AND?: CodeReviewWhereInput | CodeReviewWhereInput[]
    OR?: CodeReviewWhereInput[]
    NOT?: CodeReviewWhereInput | CodeReviewWhereInput[]
    id?: IntFilter<"CodeReview"> | number
    language?: StringFilter<"CodeReview"> | string
    code?: StringFilter<"CodeReview"> | string
    summary?: StringNullableFilter<"CodeReview"> | string | null
    findings?: StringNullableFilter<"CodeReview"> | string | null
    overallSeverity?: StringNullableFilter<"CodeReview"> | string | null
    bugCount?: IntFilter<"CodeReview"> | number
    securityCount?: IntFilter<"CodeReview"> | number
    perfCount?: IntFilter<"CodeReview"> | number
    qualityCount?: IntFilter<"CodeReview"> | number
    bestPracticeCount?: IntFilter<"CodeReview"> | number
    status?: StringFilter<"CodeReview"> | string
    createdAt?: DateTimeFilter<"CodeReview"> | Date | string
  }

  export type CodeReviewOrderByWithRelationInput = {
    id?: SortOrder
    language?: SortOrder
    code?: SortOrder
    summary?: SortOrderInput | SortOrder
    findings?: SortOrderInput | SortOrder
    overallSeverity?: SortOrderInput | SortOrder
    bugCount?: SortOrder
    securityCount?: SortOrder
    perfCount?: SortOrder
    qualityCount?: SortOrder
    bestPracticeCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CodeReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CodeReviewWhereInput | CodeReviewWhereInput[]
    OR?: CodeReviewWhereInput[]
    NOT?: CodeReviewWhereInput | CodeReviewWhereInput[]
    language?: StringFilter<"CodeReview"> | string
    code?: StringFilter<"CodeReview"> | string
    summary?: StringNullableFilter<"CodeReview"> | string | null
    findings?: StringNullableFilter<"CodeReview"> | string | null
    overallSeverity?: StringNullableFilter<"CodeReview"> | string | null
    bugCount?: IntFilter<"CodeReview"> | number
    securityCount?: IntFilter<"CodeReview"> | number
    perfCount?: IntFilter<"CodeReview"> | number
    qualityCount?: IntFilter<"CodeReview"> | number
    bestPracticeCount?: IntFilter<"CodeReview"> | number
    status?: StringFilter<"CodeReview"> | string
    createdAt?: DateTimeFilter<"CodeReview"> | Date | string
  }, "id">

  export type CodeReviewOrderByWithAggregationInput = {
    id?: SortOrder
    language?: SortOrder
    code?: SortOrder
    summary?: SortOrderInput | SortOrder
    findings?: SortOrderInput | SortOrder
    overallSeverity?: SortOrderInput | SortOrder
    bugCount?: SortOrder
    securityCount?: SortOrder
    perfCount?: SortOrder
    qualityCount?: SortOrder
    bestPracticeCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    _count?: CodeReviewCountOrderByAggregateInput
    _avg?: CodeReviewAvgOrderByAggregateInput
    _max?: CodeReviewMaxOrderByAggregateInput
    _min?: CodeReviewMinOrderByAggregateInput
    _sum?: CodeReviewSumOrderByAggregateInput
  }

  export type CodeReviewScalarWhereWithAggregatesInput = {
    AND?: CodeReviewScalarWhereWithAggregatesInput | CodeReviewScalarWhereWithAggregatesInput[]
    OR?: CodeReviewScalarWhereWithAggregatesInput[]
    NOT?: CodeReviewScalarWhereWithAggregatesInput | CodeReviewScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CodeReview"> | number
    language?: StringWithAggregatesFilter<"CodeReview"> | string
    code?: StringWithAggregatesFilter<"CodeReview"> | string
    summary?: StringNullableWithAggregatesFilter<"CodeReview"> | string | null
    findings?: StringNullableWithAggregatesFilter<"CodeReview"> | string | null
    overallSeverity?: StringNullableWithAggregatesFilter<"CodeReview"> | string | null
    bugCount?: IntWithAggregatesFilter<"CodeReview"> | number
    securityCount?: IntWithAggregatesFilter<"CodeReview"> | number
    perfCount?: IntWithAggregatesFilter<"CodeReview"> | number
    qualityCount?: IntWithAggregatesFilter<"CodeReview"> | number
    bestPracticeCount?: IntWithAggregatesFilter<"CodeReview"> | number
    status?: StringWithAggregatesFilter<"CodeReview"> | string
    createdAt?: DateTimeWithAggregatesFilter<"CodeReview"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    documents?: RagDocumentListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    documents?: RagDocumentOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    documents?: RagDocumentListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RagDocumentCreateInput = {
    filename: string
    originalName: string
    pageCount?: number | null
    chunkCount?: number
    status?: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutDocumentsInput
    chunks?: RagChunkCreateNestedManyWithoutDocumentInput
    conversations?: RagConversationCreateNestedManyWithoutDocumentInput
  }

  export type RagDocumentUncheckedCreateInput = {
    id?: number
    filename: string
    originalName: string
    pageCount?: number | null
    chunkCount?: number
    status?: string
    createdAt?: Date | string
    userId?: number | null
    chunks?: RagChunkUncheckedCreateNestedManyWithoutDocumentInput
    conversations?: RagConversationUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type RagDocumentUpdateInput = {
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    chunkCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutDocumentsNestedInput
    chunks?: RagChunkUpdateManyWithoutDocumentNestedInput
    conversations?: RagConversationUpdateManyWithoutDocumentNestedInput
  }

  export type RagDocumentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    chunkCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    chunks?: RagChunkUncheckedUpdateManyWithoutDocumentNestedInput
    conversations?: RagConversationUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type RagDocumentCreateManyInput = {
    id?: number
    filename: string
    originalName: string
    pageCount?: number | null
    chunkCount?: number
    status?: string
    createdAt?: Date | string
    userId?: number | null
  }

  export type RagDocumentUpdateManyMutationInput = {
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    chunkCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RagDocumentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    chunkCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type RagChunkCreateInput = {
    chunkIndex: number
    content: string
    pageNumber?: number | null
    searchVector?: string | null
    document: RagDocumentCreateNestedOneWithoutChunksInput
  }

  export type RagChunkUncheckedCreateInput = {
    id?: number
    documentId: number
    chunkIndex: number
    content: string
    pageNumber?: number | null
    searchVector?: string | null
  }

  export type RagChunkUpdateInput = {
    chunkIndex?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    pageNumber?: NullableIntFieldUpdateOperationsInput | number | null
    searchVector?: NullableStringFieldUpdateOperationsInput | string | null
    document?: RagDocumentUpdateOneRequiredWithoutChunksNestedInput
  }

  export type RagChunkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    chunkIndex?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    pageNumber?: NullableIntFieldUpdateOperationsInput | number | null
    searchVector?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RagChunkCreateManyInput = {
    id?: number
    documentId: number
    chunkIndex: number
    content: string
    pageNumber?: number | null
    searchVector?: string | null
  }

  export type RagChunkUpdateManyMutationInput = {
    chunkIndex?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    pageNumber?: NullableIntFieldUpdateOperationsInput | number | null
    searchVector?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RagChunkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    chunkIndex?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    pageNumber?: NullableIntFieldUpdateOperationsInput | number | null
    searchVector?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RagConversationCreateInput = {
    role: string
    content: string
    sources?: string | null
    createdAt?: Date | string
    document: RagDocumentCreateNestedOneWithoutConversationsInput
  }

  export type RagConversationUncheckedCreateInput = {
    id?: number
    documentId: number
    role: string
    content: string
    sources?: string | null
    createdAt?: Date | string
  }

  export type RagConversationUpdateInput = {
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sources?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    document?: RagDocumentUpdateOneRequiredWithoutConversationsNestedInput
  }

  export type RagConversationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sources?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RagConversationCreateManyInput = {
    id?: number
    documentId: number
    role: string
    content: string
    sources?: string | null
    createdAt?: Date | string
  }

  export type RagConversationUpdateManyMutationInput = {
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sources?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RagConversationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    documentId?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sources?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeReviewCreateInput = {
    language: string
    code: string
    summary?: string | null
    findings?: string | null
    overallSeverity?: string | null
    bugCount?: number
    securityCount?: number
    perfCount?: number
    qualityCount?: number
    bestPracticeCount?: number
    status?: string
    createdAt?: Date | string
  }

  export type CodeReviewUncheckedCreateInput = {
    id?: number
    language: string
    code: string
    summary?: string | null
    findings?: string | null
    overallSeverity?: string | null
    bugCount?: number
    securityCount?: number
    perfCount?: number
    qualityCount?: number
    bestPracticeCount?: number
    status?: string
    createdAt?: Date | string
  }

  export type CodeReviewUpdateInput = {
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    findings?: NullableStringFieldUpdateOperationsInput | string | null
    overallSeverity?: NullableStringFieldUpdateOperationsInput | string | null
    bugCount?: IntFieldUpdateOperationsInput | number
    securityCount?: IntFieldUpdateOperationsInput | number
    perfCount?: IntFieldUpdateOperationsInput | number
    qualityCount?: IntFieldUpdateOperationsInput | number
    bestPracticeCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeReviewUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    findings?: NullableStringFieldUpdateOperationsInput | string | null
    overallSeverity?: NullableStringFieldUpdateOperationsInput | string | null
    bugCount?: IntFieldUpdateOperationsInput | number
    securityCount?: IntFieldUpdateOperationsInput | number
    perfCount?: IntFieldUpdateOperationsInput | number
    qualityCount?: IntFieldUpdateOperationsInput | number
    bestPracticeCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeReviewCreateManyInput = {
    id?: number
    language: string
    code: string
    summary?: string | null
    findings?: string | null
    overallSeverity?: string | null
    bugCount?: number
    securityCount?: number
    perfCount?: number
    qualityCount?: number
    bestPracticeCount?: number
    status?: string
    createdAt?: Date | string
  }

  export type CodeReviewUpdateManyMutationInput = {
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    findings?: NullableStringFieldUpdateOperationsInput | string | null
    overallSeverity?: NullableStringFieldUpdateOperationsInput | string | null
    bugCount?: IntFieldUpdateOperationsInput | number
    securityCount?: IntFieldUpdateOperationsInput | number
    perfCount?: IntFieldUpdateOperationsInput | number
    qualityCount?: IntFieldUpdateOperationsInput | number
    bestPracticeCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CodeReviewUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    language?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    findings?: NullableStringFieldUpdateOperationsInput | string | null
    overallSeverity?: NullableStringFieldUpdateOperationsInput | string | null
    bugCount?: IntFieldUpdateOperationsInput | number
    securityCount?: IntFieldUpdateOperationsInput | number
    perfCount?: IntFieldUpdateOperationsInput | number
    qualityCount?: IntFieldUpdateOperationsInput | number
    bestPracticeCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    documents?: RagDocumentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
    documents?: RagDocumentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: RagDocumentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    documents?: RagDocumentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type RagChunkListRelationFilter = {
    every?: RagChunkWhereInput
    some?: RagChunkWhereInput
    none?: RagChunkWhereInput
  }

  export type RagConversationListRelationFilter = {
    every?: RagConversationWhereInput
    some?: RagConversationWhereInput
    none?: RagConversationWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type RagChunkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RagConversationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RagDocumentCountOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    pageCount?: SortOrder
    chunkCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type RagDocumentAvgOrderByAggregateInput = {
    id?: SortOrder
    pageCount?: SortOrder
    chunkCount?: SortOrder
    userId?: SortOrder
  }

  export type RagDocumentMaxOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    pageCount?: SortOrder
    chunkCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type RagDocumentMinOrderByAggregateInput = {
    id?: SortOrder
    filename?: SortOrder
    originalName?: SortOrder
    pageCount?: SortOrder
    chunkCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
  }

  export type RagDocumentSumOrderByAggregateInput = {
    id?: SortOrder
    pageCount?: SortOrder
    chunkCount?: SortOrder
    userId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type RagDocumentScalarRelationFilter = {
    is?: RagDocumentWhereInput
    isNot?: RagDocumentWhereInput
  }

  export type RagChunkCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    chunkIndex?: SortOrder
    content?: SortOrder
    pageNumber?: SortOrder
    searchVector?: SortOrder
  }

  export type RagChunkAvgOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    chunkIndex?: SortOrder
    pageNumber?: SortOrder
  }

  export type RagChunkMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    chunkIndex?: SortOrder
    content?: SortOrder
    pageNumber?: SortOrder
    searchVector?: SortOrder
  }

  export type RagChunkMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    chunkIndex?: SortOrder
    content?: SortOrder
    pageNumber?: SortOrder
    searchVector?: SortOrder
  }

  export type RagChunkSumOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    chunkIndex?: SortOrder
    pageNumber?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type RagConversationCountOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    sources?: SortOrder
    createdAt?: SortOrder
  }

  export type RagConversationAvgOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
  }

  export type RagConversationMaxOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    sources?: SortOrder
    createdAt?: SortOrder
  }

  export type RagConversationMinOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
    role?: SortOrder
    content?: SortOrder
    sources?: SortOrder
    createdAt?: SortOrder
  }

  export type RagConversationSumOrderByAggregateInput = {
    id?: SortOrder
    documentId?: SortOrder
  }

  export type CodeReviewCountOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    code?: SortOrder
    summary?: SortOrder
    findings?: SortOrder
    overallSeverity?: SortOrder
    bugCount?: SortOrder
    securityCount?: SortOrder
    perfCount?: SortOrder
    qualityCount?: SortOrder
    bestPracticeCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CodeReviewAvgOrderByAggregateInput = {
    id?: SortOrder
    bugCount?: SortOrder
    securityCount?: SortOrder
    perfCount?: SortOrder
    qualityCount?: SortOrder
    bestPracticeCount?: SortOrder
  }

  export type CodeReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    code?: SortOrder
    summary?: SortOrder
    findings?: SortOrder
    overallSeverity?: SortOrder
    bugCount?: SortOrder
    securityCount?: SortOrder
    perfCount?: SortOrder
    qualityCount?: SortOrder
    bestPracticeCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CodeReviewMinOrderByAggregateInput = {
    id?: SortOrder
    language?: SortOrder
    code?: SortOrder
    summary?: SortOrder
    findings?: SortOrder
    overallSeverity?: SortOrder
    bugCount?: SortOrder
    securityCount?: SortOrder
    perfCount?: SortOrder
    qualityCount?: SortOrder
    bestPracticeCount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type CodeReviewSumOrderByAggregateInput = {
    id?: SortOrder
    bugCount?: SortOrder
    securityCount?: SortOrder
    perfCount?: SortOrder
    qualityCount?: SortOrder
    bestPracticeCount?: SortOrder
  }

  export type RagDocumentListRelationFilter = {
    every?: RagDocumentWhereInput
    some?: RagDocumentWhereInput
    none?: RagDocumentWhereInput
  }

  export type RagDocumentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserCreateNestedOneWithoutDocumentsInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    connect?: UserWhereUniqueInput
  }

  export type RagChunkCreateNestedManyWithoutDocumentInput = {
    create?: XOR<RagChunkCreateWithoutDocumentInput, RagChunkUncheckedCreateWithoutDocumentInput> | RagChunkCreateWithoutDocumentInput[] | RagChunkUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: RagChunkCreateOrConnectWithoutDocumentInput | RagChunkCreateOrConnectWithoutDocumentInput[]
    createMany?: RagChunkCreateManyDocumentInputEnvelope
    connect?: RagChunkWhereUniqueInput | RagChunkWhereUniqueInput[]
  }

  export type RagConversationCreateNestedManyWithoutDocumentInput = {
    create?: XOR<RagConversationCreateWithoutDocumentInput, RagConversationUncheckedCreateWithoutDocumentInput> | RagConversationCreateWithoutDocumentInput[] | RagConversationUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: RagConversationCreateOrConnectWithoutDocumentInput | RagConversationCreateOrConnectWithoutDocumentInput[]
    createMany?: RagConversationCreateManyDocumentInputEnvelope
    connect?: RagConversationWhereUniqueInput | RagConversationWhereUniqueInput[]
  }

  export type RagChunkUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<RagChunkCreateWithoutDocumentInput, RagChunkUncheckedCreateWithoutDocumentInput> | RagChunkCreateWithoutDocumentInput[] | RagChunkUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: RagChunkCreateOrConnectWithoutDocumentInput | RagChunkCreateOrConnectWithoutDocumentInput[]
    createMany?: RagChunkCreateManyDocumentInputEnvelope
    connect?: RagChunkWhereUniqueInput | RagChunkWhereUniqueInput[]
  }

  export type RagConversationUncheckedCreateNestedManyWithoutDocumentInput = {
    create?: XOR<RagConversationCreateWithoutDocumentInput, RagConversationUncheckedCreateWithoutDocumentInput> | RagConversationCreateWithoutDocumentInput[] | RagConversationUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: RagConversationCreateOrConnectWithoutDocumentInput | RagConversationCreateOrConnectWithoutDocumentInput[]
    createMany?: RagConversationCreateManyDocumentInputEnvelope
    connect?: RagConversationWhereUniqueInput | RagConversationWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneWithoutDocumentsNestedInput = {
    create?: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDocumentsInput
    upsert?: UserUpsertWithoutDocumentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDocumentsInput, UserUpdateWithoutDocumentsInput>, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type RagChunkUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<RagChunkCreateWithoutDocumentInput, RagChunkUncheckedCreateWithoutDocumentInput> | RagChunkCreateWithoutDocumentInput[] | RagChunkUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: RagChunkCreateOrConnectWithoutDocumentInput | RagChunkCreateOrConnectWithoutDocumentInput[]
    upsert?: RagChunkUpsertWithWhereUniqueWithoutDocumentInput | RagChunkUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: RagChunkCreateManyDocumentInputEnvelope
    set?: RagChunkWhereUniqueInput | RagChunkWhereUniqueInput[]
    disconnect?: RagChunkWhereUniqueInput | RagChunkWhereUniqueInput[]
    delete?: RagChunkWhereUniqueInput | RagChunkWhereUniqueInput[]
    connect?: RagChunkWhereUniqueInput | RagChunkWhereUniqueInput[]
    update?: RagChunkUpdateWithWhereUniqueWithoutDocumentInput | RagChunkUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: RagChunkUpdateManyWithWhereWithoutDocumentInput | RagChunkUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: RagChunkScalarWhereInput | RagChunkScalarWhereInput[]
  }

  export type RagConversationUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<RagConversationCreateWithoutDocumentInput, RagConversationUncheckedCreateWithoutDocumentInput> | RagConversationCreateWithoutDocumentInput[] | RagConversationUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: RagConversationCreateOrConnectWithoutDocumentInput | RagConversationCreateOrConnectWithoutDocumentInput[]
    upsert?: RagConversationUpsertWithWhereUniqueWithoutDocumentInput | RagConversationUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: RagConversationCreateManyDocumentInputEnvelope
    set?: RagConversationWhereUniqueInput | RagConversationWhereUniqueInput[]
    disconnect?: RagConversationWhereUniqueInput | RagConversationWhereUniqueInput[]
    delete?: RagConversationWhereUniqueInput | RagConversationWhereUniqueInput[]
    connect?: RagConversationWhereUniqueInput | RagConversationWhereUniqueInput[]
    update?: RagConversationUpdateWithWhereUniqueWithoutDocumentInput | RagConversationUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: RagConversationUpdateManyWithWhereWithoutDocumentInput | RagConversationUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: RagConversationScalarWhereInput | RagConversationScalarWhereInput[]
  }

  export type RagChunkUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<RagChunkCreateWithoutDocumentInput, RagChunkUncheckedCreateWithoutDocumentInput> | RagChunkCreateWithoutDocumentInput[] | RagChunkUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: RagChunkCreateOrConnectWithoutDocumentInput | RagChunkCreateOrConnectWithoutDocumentInput[]
    upsert?: RagChunkUpsertWithWhereUniqueWithoutDocumentInput | RagChunkUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: RagChunkCreateManyDocumentInputEnvelope
    set?: RagChunkWhereUniqueInput | RagChunkWhereUniqueInput[]
    disconnect?: RagChunkWhereUniqueInput | RagChunkWhereUniqueInput[]
    delete?: RagChunkWhereUniqueInput | RagChunkWhereUniqueInput[]
    connect?: RagChunkWhereUniqueInput | RagChunkWhereUniqueInput[]
    update?: RagChunkUpdateWithWhereUniqueWithoutDocumentInput | RagChunkUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: RagChunkUpdateManyWithWhereWithoutDocumentInput | RagChunkUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: RagChunkScalarWhereInput | RagChunkScalarWhereInput[]
  }

  export type RagConversationUncheckedUpdateManyWithoutDocumentNestedInput = {
    create?: XOR<RagConversationCreateWithoutDocumentInput, RagConversationUncheckedCreateWithoutDocumentInput> | RagConversationCreateWithoutDocumentInput[] | RagConversationUncheckedCreateWithoutDocumentInput[]
    connectOrCreate?: RagConversationCreateOrConnectWithoutDocumentInput | RagConversationCreateOrConnectWithoutDocumentInput[]
    upsert?: RagConversationUpsertWithWhereUniqueWithoutDocumentInput | RagConversationUpsertWithWhereUniqueWithoutDocumentInput[]
    createMany?: RagConversationCreateManyDocumentInputEnvelope
    set?: RagConversationWhereUniqueInput | RagConversationWhereUniqueInput[]
    disconnect?: RagConversationWhereUniqueInput | RagConversationWhereUniqueInput[]
    delete?: RagConversationWhereUniqueInput | RagConversationWhereUniqueInput[]
    connect?: RagConversationWhereUniqueInput | RagConversationWhereUniqueInput[]
    update?: RagConversationUpdateWithWhereUniqueWithoutDocumentInput | RagConversationUpdateWithWhereUniqueWithoutDocumentInput[]
    updateMany?: RagConversationUpdateManyWithWhereWithoutDocumentInput | RagConversationUpdateManyWithWhereWithoutDocumentInput[]
    deleteMany?: RagConversationScalarWhereInput | RagConversationScalarWhereInput[]
  }

  export type RagDocumentCreateNestedOneWithoutChunksInput = {
    create?: XOR<RagDocumentCreateWithoutChunksInput, RagDocumentUncheckedCreateWithoutChunksInput>
    connectOrCreate?: RagDocumentCreateOrConnectWithoutChunksInput
    connect?: RagDocumentWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type RagDocumentUpdateOneRequiredWithoutChunksNestedInput = {
    create?: XOR<RagDocumentCreateWithoutChunksInput, RagDocumentUncheckedCreateWithoutChunksInput>
    connectOrCreate?: RagDocumentCreateOrConnectWithoutChunksInput
    upsert?: RagDocumentUpsertWithoutChunksInput
    connect?: RagDocumentWhereUniqueInput
    update?: XOR<XOR<RagDocumentUpdateToOneWithWhereWithoutChunksInput, RagDocumentUpdateWithoutChunksInput>, RagDocumentUncheckedUpdateWithoutChunksInput>
  }

  export type RagDocumentCreateNestedOneWithoutConversationsInput = {
    create?: XOR<RagDocumentCreateWithoutConversationsInput, RagDocumentUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: RagDocumentCreateOrConnectWithoutConversationsInput
    connect?: RagDocumentWhereUniqueInput
  }

  export type RagDocumentUpdateOneRequiredWithoutConversationsNestedInput = {
    create?: XOR<RagDocumentCreateWithoutConversationsInput, RagDocumentUncheckedCreateWithoutConversationsInput>
    connectOrCreate?: RagDocumentCreateOrConnectWithoutConversationsInput
    upsert?: RagDocumentUpsertWithoutConversationsInput
    connect?: RagDocumentWhereUniqueInput
    update?: XOR<XOR<RagDocumentUpdateToOneWithWhereWithoutConversationsInput, RagDocumentUpdateWithoutConversationsInput>, RagDocumentUncheckedUpdateWithoutConversationsInput>
  }

  export type RagDocumentCreateNestedManyWithoutUserInput = {
    create?: XOR<RagDocumentCreateWithoutUserInput, RagDocumentUncheckedCreateWithoutUserInput> | RagDocumentCreateWithoutUserInput[] | RagDocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RagDocumentCreateOrConnectWithoutUserInput | RagDocumentCreateOrConnectWithoutUserInput[]
    createMany?: RagDocumentCreateManyUserInputEnvelope
    connect?: RagDocumentWhereUniqueInput | RagDocumentWhereUniqueInput[]
  }

  export type RagDocumentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RagDocumentCreateWithoutUserInput, RagDocumentUncheckedCreateWithoutUserInput> | RagDocumentCreateWithoutUserInput[] | RagDocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RagDocumentCreateOrConnectWithoutUserInput | RagDocumentCreateOrConnectWithoutUserInput[]
    createMany?: RagDocumentCreateManyUserInputEnvelope
    connect?: RagDocumentWhereUniqueInput | RagDocumentWhereUniqueInput[]
  }

  export type RagDocumentUpdateManyWithoutUserNestedInput = {
    create?: XOR<RagDocumentCreateWithoutUserInput, RagDocumentUncheckedCreateWithoutUserInput> | RagDocumentCreateWithoutUserInput[] | RagDocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RagDocumentCreateOrConnectWithoutUserInput | RagDocumentCreateOrConnectWithoutUserInput[]
    upsert?: RagDocumentUpsertWithWhereUniqueWithoutUserInput | RagDocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RagDocumentCreateManyUserInputEnvelope
    set?: RagDocumentWhereUniqueInput | RagDocumentWhereUniqueInput[]
    disconnect?: RagDocumentWhereUniqueInput | RagDocumentWhereUniqueInput[]
    delete?: RagDocumentWhereUniqueInput | RagDocumentWhereUniqueInput[]
    connect?: RagDocumentWhereUniqueInput | RagDocumentWhereUniqueInput[]
    update?: RagDocumentUpdateWithWhereUniqueWithoutUserInput | RagDocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RagDocumentUpdateManyWithWhereWithoutUserInput | RagDocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RagDocumentScalarWhereInput | RagDocumentScalarWhereInput[]
  }

  export type RagDocumentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RagDocumentCreateWithoutUserInput, RagDocumentUncheckedCreateWithoutUserInput> | RagDocumentCreateWithoutUserInput[] | RagDocumentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RagDocumentCreateOrConnectWithoutUserInput | RagDocumentCreateOrConnectWithoutUserInput[]
    upsert?: RagDocumentUpsertWithWhereUniqueWithoutUserInput | RagDocumentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RagDocumentCreateManyUserInputEnvelope
    set?: RagDocumentWhereUniqueInput | RagDocumentWhereUniqueInput[]
    disconnect?: RagDocumentWhereUniqueInput | RagDocumentWhereUniqueInput[]
    delete?: RagDocumentWhereUniqueInput | RagDocumentWhereUniqueInput[]
    connect?: RagDocumentWhereUniqueInput | RagDocumentWhereUniqueInput[]
    update?: RagDocumentUpdateWithWhereUniqueWithoutUserInput | RagDocumentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RagDocumentUpdateManyWithWhereWithoutUserInput | RagDocumentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RagDocumentScalarWhereInput | RagDocumentScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserCreateWithoutDocumentsInput = {
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutDocumentsInput = {
    id?: number
    email: string
    password: string
    name?: string | null
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutDocumentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
  }

  export type RagChunkCreateWithoutDocumentInput = {
    chunkIndex: number
    content: string
    pageNumber?: number | null
    searchVector?: string | null
  }

  export type RagChunkUncheckedCreateWithoutDocumentInput = {
    id?: number
    chunkIndex: number
    content: string
    pageNumber?: number | null
    searchVector?: string | null
  }

  export type RagChunkCreateOrConnectWithoutDocumentInput = {
    where: RagChunkWhereUniqueInput
    create: XOR<RagChunkCreateWithoutDocumentInput, RagChunkUncheckedCreateWithoutDocumentInput>
  }

  export type RagChunkCreateManyDocumentInputEnvelope = {
    data: RagChunkCreateManyDocumentInput | RagChunkCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type RagConversationCreateWithoutDocumentInput = {
    role: string
    content: string
    sources?: string | null
    createdAt?: Date | string
  }

  export type RagConversationUncheckedCreateWithoutDocumentInput = {
    id?: number
    role: string
    content: string
    sources?: string | null
    createdAt?: Date | string
  }

  export type RagConversationCreateOrConnectWithoutDocumentInput = {
    where: RagConversationWhereUniqueInput
    create: XOR<RagConversationCreateWithoutDocumentInput, RagConversationUncheckedCreateWithoutDocumentInput>
  }

  export type RagConversationCreateManyDocumentInputEnvelope = {
    data: RagConversationCreateManyDocumentInput | RagConversationCreateManyDocumentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutDocumentsInput = {
    update: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
    create: XOR<UserCreateWithoutDocumentsInput, UserUncheckedCreateWithoutDocumentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDocumentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDocumentsInput, UserUncheckedUpdateWithoutDocumentsInput>
  }

  export type UserUpdateWithoutDocumentsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutDocumentsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RagChunkUpsertWithWhereUniqueWithoutDocumentInput = {
    where: RagChunkWhereUniqueInput
    update: XOR<RagChunkUpdateWithoutDocumentInput, RagChunkUncheckedUpdateWithoutDocumentInput>
    create: XOR<RagChunkCreateWithoutDocumentInput, RagChunkUncheckedCreateWithoutDocumentInput>
  }

  export type RagChunkUpdateWithWhereUniqueWithoutDocumentInput = {
    where: RagChunkWhereUniqueInput
    data: XOR<RagChunkUpdateWithoutDocumentInput, RagChunkUncheckedUpdateWithoutDocumentInput>
  }

  export type RagChunkUpdateManyWithWhereWithoutDocumentInput = {
    where: RagChunkScalarWhereInput
    data: XOR<RagChunkUpdateManyMutationInput, RagChunkUncheckedUpdateManyWithoutDocumentInput>
  }

  export type RagChunkScalarWhereInput = {
    AND?: RagChunkScalarWhereInput | RagChunkScalarWhereInput[]
    OR?: RagChunkScalarWhereInput[]
    NOT?: RagChunkScalarWhereInput | RagChunkScalarWhereInput[]
    id?: IntFilter<"RagChunk"> | number
    documentId?: IntFilter<"RagChunk"> | number
    chunkIndex?: IntFilter<"RagChunk"> | number
    content?: StringFilter<"RagChunk"> | string
    pageNumber?: IntNullableFilter<"RagChunk"> | number | null
    searchVector?: StringNullableFilter<"RagChunk"> | string | null
  }

  export type RagConversationUpsertWithWhereUniqueWithoutDocumentInput = {
    where: RagConversationWhereUniqueInput
    update: XOR<RagConversationUpdateWithoutDocumentInput, RagConversationUncheckedUpdateWithoutDocumentInput>
    create: XOR<RagConversationCreateWithoutDocumentInput, RagConversationUncheckedCreateWithoutDocumentInput>
  }

  export type RagConversationUpdateWithWhereUniqueWithoutDocumentInput = {
    where: RagConversationWhereUniqueInput
    data: XOR<RagConversationUpdateWithoutDocumentInput, RagConversationUncheckedUpdateWithoutDocumentInput>
  }

  export type RagConversationUpdateManyWithWhereWithoutDocumentInput = {
    where: RagConversationScalarWhereInput
    data: XOR<RagConversationUpdateManyMutationInput, RagConversationUncheckedUpdateManyWithoutDocumentInput>
  }

  export type RagConversationScalarWhereInput = {
    AND?: RagConversationScalarWhereInput | RagConversationScalarWhereInput[]
    OR?: RagConversationScalarWhereInput[]
    NOT?: RagConversationScalarWhereInput | RagConversationScalarWhereInput[]
    id?: IntFilter<"RagConversation"> | number
    documentId?: IntFilter<"RagConversation"> | number
    role?: StringFilter<"RagConversation"> | string
    content?: StringFilter<"RagConversation"> | string
    sources?: StringNullableFilter<"RagConversation"> | string | null
    createdAt?: DateTimeFilter<"RagConversation"> | Date | string
  }

  export type RagDocumentCreateWithoutChunksInput = {
    filename: string
    originalName: string
    pageCount?: number | null
    chunkCount?: number
    status?: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutDocumentsInput
    conversations?: RagConversationCreateNestedManyWithoutDocumentInput
  }

  export type RagDocumentUncheckedCreateWithoutChunksInput = {
    id?: number
    filename: string
    originalName: string
    pageCount?: number | null
    chunkCount?: number
    status?: string
    createdAt?: Date | string
    userId?: number | null
    conversations?: RagConversationUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type RagDocumentCreateOrConnectWithoutChunksInput = {
    where: RagDocumentWhereUniqueInput
    create: XOR<RagDocumentCreateWithoutChunksInput, RagDocumentUncheckedCreateWithoutChunksInput>
  }

  export type RagDocumentUpsertWithoutChunksInput = {
    update: XOR<RagDocumentUpdateWithoutChunksInput, RagDocumentUncheckedUpdateWithoutChunksInput>
    create: XOR<RagDocumentCreateWithoutChunksInput, RagDocumentUncheckedCreateWithoutChunksInput>
    where?: RagDocumentWhereInput
  }

  export type RagDocumentUpdateToOneWithWhereWithoutChunksInput = {
    where?: RagDocumentWhereInput
    data: XOR<RagDocumentUpdateWithoutChunksInput, RagDocumentUncheckedUpdateWithoutChunksInput>
  }

  export type RagDocumentUpdateWithoutChunksInput = {
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    chunkCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutDocumentsNestedInput
    conversations?: RagConversationUpdateManyWithoutDocumentNestedInput
  }

  export type RagDocumentUncheckedUpdateWithoutChunksInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    chunkCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    conversations?: RagConversationUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type RagDocumentCreateWithoutConversationsInput = {
    filename: string
    originalName: string
    pageCount?: number | null
    chunkCount?: number
    status?: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutDocumentsInput
    chunks?: RagChunkCreateNestedManyWithoutDocumentInput
  }

  export type RagDocumentUncheckedCreateWithoutConversationsInput = {
    id?: number
    filename: string
    originalName: string
    pageCount?: number | null
    chunkCount?: number
    status?: string
    createdAt?: Date | string
    userId?: number | null
    chunks?: RagChunkUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type RagDocumentCreateOrConnectWithoutConversationsInput = {
    where: RagDocumentWhereUniqueInput
    create: XOR<RagDocumentCreateWithoutConversationsInput, RagDocumentUncheckedCreateWithoutConversationsInput>
  }

  export type RagDocumentUpsertWithoutConversationsInput = {
    update: XOR<RagDocumentUpdateWithoutConversationsInput, RagDocumentUncheckedUpdateWithoutConversationsInput>
    create: XOR<RagDocumentCreateWithoutConversationsInput, RagDocumentUncheckedCreateWithoutConversationsInput>
    where?: RagDocumentWhereInput
  }

  export type RagDocumentUpdateToOneWithWhereWithoutConversationsInput = {
    where?: RagDocumentWhereInput
    data: XOR<RagDocumentUpdateWithoutConversationsInput, RagDocumentUncheckedUpdateWithoutConversationsInput>
  }

  export type RagDocumentUpdateWithoutConversationsInput = {
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    chunkCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutDocumentsNestedInput
    chunks?: RagChunkUpdateManyWithoutDocumentNestedInput
  }

  export type RagDocumentUncheckedUpdateWithoutConversationsInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    chunkCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: NullableIntFieldUpdateOperationsInput | number | null
    chunks?: RagChunkUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type RagDocumentCreateWithoutUserInput = {
    filename: string
    originalName: string
    pageCount?: number | null
    chunkCount?: number
    status?: string
    createdAt?: Date | string
    chunks?: RagChunkCreateNestedManyWithoutDocumentInput
    conversations?: RagConversationCreateNestedManyWithoutDocumentInput
  }

  export type RagDocumentUncheckedCreateWithoutUserInput = {
    id?: number
    filename: string
    originalName: string
    pageCount?: number | null
    chunkCount?: number
    status?: string
    createdAt?: Date | string
    chunks?: RagChunkUncheckedCreateNestedManyWithoutDocumentInput
    conversations?: RagConversationUncheckedCreateNestedManyWithoutDocumentInput
  }

  export type RagDocumentCreateOrConnectWithoutUserInput = {
    where: RagDocumentWhereUniqueInput
    create: XOR<RagDocumentCreateWithoutUserInput, RagDocumentUncheckedCreateWithoutUserInput>
  }

  export type RagDocumentCreateManyUserInputEnvelope = {
    data: RagDocumentCreateManyUserInput | RagDocumentCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RagDocumentUpsertWithWhereUniqueWithoutUserInput = {
    where: RagDocumentWhereUniqueInput
    update: XOR<RagDocumentUpdateWithoutUserInput, RagDocumentUncheckedUpdateWithoutUserInput>
    create: XOR<RagDocumentCreateWithoutUserInput, RagDocumentUncheckedCreateWithoutUserInput>
  }

  export type RagDocumentUpdateWithWhereUniqueWithoutUserInput = {
    where: RagDocumentWhereUniqueInput
    data: XOR<RagDocumentUpdateWithoutUserInput, RagDocumentUncheckedUpdateWithoutUserInput>
  }

  export type RagDocumentUpdateManyWithWhereWithoutUserInput = {
    where: RagDocumentScalarWhereInput
    data: XOR<RagDocumentUpdateManyMutationInput, RagDocumentUncheckedUpdateManyWithoutUserInput>
  }

  export type RagDocumentScalarWhereInput = {
    AND?: RagDocumentScalarWhereInput | RagDocumentScalarWhereInput[]
    OR?: RagDocumentScalarWhereInput[]
    NOT?: RagDocumentScalarWhereInput | RagDocumentScalarWhereInput[]
    id?: IntFilter<"RagDocument"> | number
    filename?: StringFilter<"RagDocument"> | string
    originalName?: StringFilter<"RagDocument"> | string
    pageCount?: IntNullableFilter<"RagDocument"> | number | null
    chunkCount?: IntFilter<"RagDocument"> | number
    status?: StringFilter<"RagDocument"> | string
    createdAt?: DateTimeFilter<"RagDocument"> | Date | string
    userId?: IntNullableFilter<"RagDocument"> | number | null
  }

  export type RagChunkCreateManyDocumentInput = {
    id?: number
    chunkIndex: number
    content: string
    pageNumber?: number | null
    searchVector?: string | null
  }

  export type RagConversationCreateManyDocumentInput = {
    id?: number
    role: string
    content: string
    sources?: string | null
    createdAt?: Date | string
  }

  export type RagChunkUpdateWithoutDocumentInput = {
    chunkIndex?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    pageNumber?: NullableIntFieldUpdateOperationsInput | number | null
    searchVector?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RagChunkUncheckedUpdateWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    chunkIndex?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    pageNumber?: NullableIntFieldUpdateOperationsInput | number | null
    searchVector?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RagChunkUncheckedUpdateManyWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    chunkIndex?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    pageNumber?: NullableIntFieldUpdateOperationsInput | number | null
    searchVector?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RagConversationUpdateWithoutDocumentInput = {
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sources?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RagConversationUncheckedUpdateWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sources?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RagConversationUncheckedUpdateManyWithoutDocumentInput = {
    id?: IntFieldUpdateOperationsInput | number
    role?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    sources?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RagDocumentCreateManyUserInput = {
    id?: number
    filename: string
    originalName: string
    pageCount?: number | null
    chunkCount?: number
    status?: string
    createdAt?: Date | string
  }

  export type RagDocumentUpdateWithoutUserInput = {
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    chunkCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chunks?: RagChunkUpdateManyWithoutDocumentNestedInput
    conversations?: RagConversationUpdateManyWithoutDocumentNestedInput
  }

  export type RagDocumentUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    chunkCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    chunks?: RagChunkUncheckedUpdateManyWithoutDocumentNestedInput
    conversations?: RagConversationUncheckedUpdateManyWithoutDocumentNestedInput
  }

  export type RagDocumentUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    filename?: StringFieldUpdateOperationsInput | string
    originalName?: StringFieldUpdateOperationsInput | string
    pageCount?: NullableIntFieldUpdateOperationsInput | number | null
    chunkCount?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}