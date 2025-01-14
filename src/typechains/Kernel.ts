/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export type ExecutionDetailStruct = {
  validAfter: PromiseOrValue<BigNumberish>;
  validUntil: PromiseOrValue<BigNumberish>;
  executor: PromiseOrValue<string>;
  validator: PromiseOrValue<string>;
};

export type ExecutionDetailStructOutput = [number, number, string, string] & {
  validAfter: number;
  validUntil: number;
  executor: string;
  validator: string;
};

export type UserOperationStruct = {
  sender: PromiseOrValue<string>;
  nonce: PromiseOrValue<BigNumberish>;
  initCode: PromiseOrValue<BytesLike>;
  callData: PromiseOrValue<BytesLike>;
  callGasLimit: PromiseOrValue<BigNumberish>;
  verificationGasLimit: PromiseOrValue<BigNumberish>;
  preVerificationGas: PromiseOrValue<BigNumberish>;
  maxFeePerGas: PromiseOrValue<BigNumberish>;
  maxPriorityFeePerGas: PromiseOrValue<BigNumberish>;
  paymasterAndData: PromiseOrValue<BytesLike>;
  signature: PromiseOrValue<BytesLike>;
};

export type UserOperationStructOutput = [
  string,
  BigNumber,
  string,
  string,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  BigNumber,
  string,
  string
] & {
  sender: string;
  nonce: BigNumber;
  initCode: string;
  callData: string;
  callGasLimit: BigNumber;
  verificationGasLimit: BigNumber;
  preVerificationGas: BigNumber;
  maxFeePerGas: BigNumber;
  maxPriorityFeePerGas: BigNumber;
  paymasterAndData: string;
  signature: string;
};

export interface KernelInterface extends utils.Interface {
  functions: {
    "disableMode(bytes4)": FunctionFragment;
    "eip712Domain()": FunctionFragment;
    "entryPoint()": FunctionFragment;
    "execute(address,uint256,bytes,uint8)": FunctionFragment;
    "executeBatch(address[],uint256[],bytes[],uint8)": FunctionFragment;
    "getDefaultValidator()": FunctionFragment;
    "getDisabledMode()": FunctionFragment;
    "getExecution(bytes4)": FunctionFragment;
    "getLastDisabledTime()": FunctionFragment;
    "getNonce(uint192)": FunctionFragment;
    "getNonce()": FunctionFragment;
    "initialize(address,bytes)": FunctionFragment;
    "isValidSignature(bytes32,bytes)": FunctionFragment;
    "name()": FunctionFragment;
    "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes)": FunctionFragment;
    "onERC1155Received(address,address,uint256,uint256,bytes)": FunctionFragment;
    "onERC721Received(address,address,uint256,bytes)": FunctionFragment;
    "setDefaultValidator(address,bytes)": FunctionFragment;
    "setExecution(bytes4,address,address,uint48,uint48,bytes)": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "validateUserOp((address,uint256,bytes,bytes,uint256,uint256,uint256,uint256,uint256,bytes,bytes),bytes32,uint256)": FunctionFragment;
    "version()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "disableMode"
      | "eip712Domain"
      | "entryPoint"
      | "execute"
      | "executeBatch"
      | "getDefaultValidator"
      | "getDisabledMode"
      | "getExecution"
      | "getLastDisabledTime"
      | "getNonce(uint192)"
      | "getNonce()"
      | "initialize"
      | "isValidSignature"
      | "name"
      | "onERC1155BatchReceived"
      | "onERC1155Received"
      | "onERC721Received"
      | "setDefaultValidator"
      | "setExecution"
      | "upgradeTo"
      | "validateUserOp"
      | "version"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "disableMode",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "eip712Domain",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "entryPoint",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "execute",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "executeBatch",
    values: [
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>[],
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getDefaultValidator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDisabledMode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getExecution",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastDisabledTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNonce(uint192)",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNonce()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "isValidSignature",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "onERC1155BatchReceived",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC1155Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onERC721Received",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "setDefaultValidator",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "setExecution",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "validateUserOp",
    values: [
      UserOperationStruct,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "disableMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "eip712Domain",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "entryPoint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "execute", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "executeBatch",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDefaultValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDisabledMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getExecution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastDisabledTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNonce(uint192)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getNonce()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isValidSignature",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155BatchReceived",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC1155Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "onERC721Received",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setDefaultValidator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setExecution",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validateUserOp",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;

  events: {
    "DefaultValidatorChanged(address,address)": EventFragment;
    "ExecutionChanged(bytes4,address,address)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "DefaultValidatorChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ExecutionChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface DefaultValidatorChangedEventObject {
  oldValidator: string;
  newValidator: string;
}
export type DefaultValidatorChangedEvent = TypedEvent<
  [string, string],
  DefaultValidatorChangedEventObject
>;

export type DefaultValidatorChangedEventFilter =
  TypedEventFilter<DefaultValidatorChangedEvent>;

export interface ExecutionChangedEventObject {
  selector: string;
  executor: string;
  validator: string;
}
export type ExecutionChangedEvent = TypedEvent<
  [string, string, string],
  ExecutionChangedEventObject
>;

export type ExecutionChangedEventFilter =
  TypedEventFilter<ExecutionChangedEvent>;

export interface UpgradedEventObject {
  newImplementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface Kernel extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: KernelInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    disableMode(
      _disableFlag: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    eip712Domain(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, string, string, BigNumber[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: BigNumber;
        verifyingContract: string;
        salt: string;
        extensions: BigNumber[];
      }
    >;

    entryPoint(overrides?: CallOverrides): Promise<[string]>;

    execute(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operation: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    executeBatch(
      dest: PromiseOrValue<string>[],
      values: PromiseOrValue<BigNumberish>[],
      func: PromiseOrValue<BytesLike>[],
      operation: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    getDefaultValidator(
      overrides?: CallOverrides
    ): Promise<[string] & { validator: string }>;

    getDisabledMode(
      overrides?: CallOverrides
    ): Promise<[string] & { disabled: string }>;

    getExecution(
      _selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[ExecutionDetailStructOutput]>;

    getLastDisabledTime(overrides?: CallOverrides): Promise<[number]>;

    "getNonce(uint192)"(
      key: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getNonce()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    initialize(
      _defaultValidator: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isValidSignature(
      hash: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    name(overrides?: CallOverrides): Promise<[string]>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setDefaultValidator(
      _defaultValidator: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setExecution(
      _selector: PromiseOrValue<BytesLike>,
      _executor: PromiseOrValue<string>,
      _validator: PromiseOrValue<string>,
      _validUntil: PromiseOrValue<BigNumberish>,
      _validAfter: PromiseOrValue<BigNumberish>,
      _enableData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeTo(
      _newImplementation: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    version(overrides?: CallOverrides): Promise<[string]>;
  };

  disableMode(
    _disableFlag: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  eip712Domain(
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, string, string, BigNumber[]] & {
      fields: string;
      name: string;
      version: string;
      chainId: BigNumber;
      verifyingContract: string;
      salt: string;
      extensions: BigNumber[];
    }
  >;

  entryPoint(overrides?: CallOverrides): Promise<string>;

  execute(
    to: PromiseOrValue<string>,
    value: PromiseOrValue<BigNumberish>,
    data: PromiseOrValue<BytesLike>,
    operation: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  executeBatch(
    dest: PromiseOrValue<string>[],
    values: PromiseOrValue<BigNumberish>[],
    func: PromiseOrValue<BytesLike>[],
    operation: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  getDefaultValidator(overrides?: CallOverrides): Promise<string>;

  getDisabledMode(overrides?: CallOverrides): Promise<string>;

  getExecution(
    _selector: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<ExecutionDetailStructOutput>;

  getLastDisabledTime(overrides?: CallOverrides): Promise<number>;

  "getNonce(uint192)"(
    key: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getNonce()"(overrides?: CallOverrides): Promise<BigNumber>;

  initialize(
    _defaultValidator: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isValidSignature(
    hash: PromiseOrValue<BytesLike>,
    signature: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  name(overrides?: CallOverrides): Promise<string>;

  onERC1155BatchReceived(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>[],
    arg3: PromiseOrValue<BigNumberish>[],
    arg4: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  onERC1155Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BigNumberish>,
    arg4: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  onERC721Received(
    arg0: PromiseOrValue<string>,
    arg1: PromiseOrValue<string>,
    arg2: PromiseOrValue<BigNumberish>,
    arg3: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  setDefaultValidator(
    _defaultValidator: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  setExecution(
    _selector: PromiseOrValue<BytesLike>,
    _executor: PromiseOrValue<string>,
    _validator: PromiseOrValue<string>,
    _validUntil: PromiseOrValue<BigNumberish>,
    _validAfter: PromiseOrValue<BigNumberish>,
    _enableData: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeTo(
    _newImplementation: PromiseOrValue<string>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  validateUserOp(
    userOp: UserOperationStruct,
    userOpHash: PromiseOrValue<BytesLike>,
    missingAccountFunds: PromiseOrValue<BigNumberish>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    disableMode(
      _disableFlag: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    eip712Domain(
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, string, string, BigNumber[]] & {
        fields: string;
        name: string;
        version: string;
        chainId: BigNumber;
        verifyingContract: string;
        salt: string;
        extensions: BigNumber[];
      }
    >;

    entryPoint(overrides?: CallOverrides): Promise<string>;

    execute(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operation: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    executeBatch(
      dest: PromiseOrValue<string>[],
      values: PromiseOrValue<BigNumberish>[],
      func: PromiseOrValue<BytesLike>[],
      operation: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    getDefaultValidator(overrides?: CallOverrides): Promise<string>;

    getDisabledMode(overrides?: CallOverrides): Promise<string>;

    getExecution(
      _selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<ExecutionDetailStructOutput>;

    getLastDisabledTime(overrides?: CallOverrides): Promise<number>;

    "getNonce(uint192)"(
      key: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getNonce()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _defaultValidator: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    isValidSignature(
      hash: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    name(overrides?: CallOverrides): Promise<string>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    setDefaultValidator(
      _defaultValidator: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    setExecution(
      _selector: PromiseOrValue<BytesLike>,
      _executor: PromiseOrValue<string>,
      _validator: PromiseOrValue<string>,
      _validUntil: PromiseOrValue<BigNumberish>,
      _validAfter: PromiseOrValue<BigNumberish>,
      _enableData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeTo(
      _newImplementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "DefaultValidatorChanged(address,address)"(
      oldValidator?: PromiseOrValue<string> | null,
      newValidator?: PromiseOrValue<string> | null
    ): DefaultValidatorChangedEventFilter;
    DefaultValidatorChanged(
      oldValidator?: PromiseOrValue<string> | null,
      newValidator?: PromiseOrValue<string> | null
    ): DefaultValidatorChangedEventFilter;

    "ExecutionChanged(bytes4,address,address)"(
      selector?: PromiseOrValue<BytesLike> | null,
      executor?: PromiseOrValue<string> | null,
      validator?: PromiseOrValue<string> | null
    ): ExecutionChangedEventFilter;
    ExecutionChanged(
      selector?: PromiseOrValue<BytesLike> | null,
      executor?: PromiseOrValue<string> | null,
      validator?: PromiseOrValue<string> | null
    ): ExecutionChangedEventFilter;

    "Upgraded(address)"(
      newImplementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
    Upgraded(
      newImplementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
  };

  estimateGas: {
    disableMode(
      _disableFlag: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    eip712Domain(overrides?: CallOverrides): Promise<BigNumber>;

    entryPoint(overrides?: CallOverrides): Promise<BigNumber>;

    execute(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operation: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    executeBatch(
      dest: PromiseOrValue<string>[],
      values: PromiseOrValue<BigNumberish>[],
      func: PromiseOrValue<BytesLike>[],
      operation: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    getDefaultValidator(overrides?: CallOverrides): Promise<BigNumber>;

    getDisabledMode(overrides?: CallOverrides): Promise<BigNumber>;

    getExecution(
      _selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLastDisabledTime(overrides?: CallOverrides): Promise<BigNumber>;

    "getNonce(uint192)"(
      key: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getNonce()"(overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _defaultValidator: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isValidSignature(
      hash: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setDefaultValidator(
      _defaultValidator: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    setExecution(
      _selector: PromiseOrValue<BytesLike>,
      _executor: PromiseOrValue<string>,
      _validator: PromiseOrValue<string>,
      _validUntil: PromiseOrValue<BigNumberish>,
      _validAfter: PromiseOrValue<BigNumberish>,
      _enableData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeTo(
      _newImplementation: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    disableMode(
      _disableFlag: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    eip712Domain(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    entryPoint(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    execute(
      to: PromiseOrValue<string>,
      value: PromiseOrValue<BigNumberish>,
      data: PromiseOrValue<BytesLike>,
      operation: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    executeBatch(
      dest: PromiseOrValue<string>[],
      values: PromiseOrValue<BigNumberish>[],
      func: PromiseOrValue<BytesLike>[],
      operation: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    getDefaultValidator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getDisabledMode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getExecution(
      _selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLastDisabledTime(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getNonce(uint192)"(
      key: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getNonce()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    initialize(
      _defaultValidator: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isValidSignature(
      hash: PromiseOrValue<BytesLike>,
      signature: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    onERC1155BatchReceived(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>[],
      arg3: PromiseOrValue<BigNumberish>[],
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC1155Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BigNumberish>,
      arg4: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onERC721Received(
      arg0: PromiseOrValue<string>,
      arg1: PromiseOrValue<string>,
      arg2: PromiseOrValue<BigNumberish>,
      arg3: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setDefaultValidator(
      _defaultValidator: PromiseOrValue<string>,
      _data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    setExecution(
      _selector: PromiseOrValue<BytesLike>,
      _executor: PromiseOrValue<string>,
      _validator: PromiseOrValue<string>,
      _validUntil: PromiseOrValue<BigNumberish>,
      _validAfter: PromiseOrValue<BigNumberish>,
      _enableData: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeTo(
      _newImplementation: PromiseOrValue<string>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    validateUserOp(
      userOp: UserOperationStruct,
      userOpHash: PromiseOrValue<BytesLike>,
      missingAccountFunds: PromiseOrValue<BigNumberish>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
