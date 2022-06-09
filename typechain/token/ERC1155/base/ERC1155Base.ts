/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from '../../../common';
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';

export interface ERC1155BaseInterface extends utils.Interface {
  functions: {
    'balanceOf(address,uint256)': FunctionFragment;
    'balanceOfBatch(address[],uint256[])': FunctionFragment;
    'isApprovedForAll(address,address)': FunctionFragment;
    'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)': FunctionFragment;
    'safeTransferFrom(address,address,uint256,uint256,bytes)': FunctionFragment;
    'setApprovalForAll(address,bool)': FunctionFragment;
    'supportsInterface(bytes4)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | 'balanceOf'
      | 'balanceOf(address,uint256)'
      | 'balanceOfBatch'
      | 'balanceOfBatch(address[],uint256[])'
      | 'isApprovedForAll'
      | 'isApprovedForAll(address,address)'
      | 'safeBatchTransferFrom'
      | 'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)'
      | 'safeTransferFrom'
      | 'safeTransferFrom(address,address,uint256,uint256,bytes)'
      | 'setApprovalForAll'
      | 'setApprovalForAll(address,bool)'
      | 'supportsInterface'
      | 'supportsInterface(bytes4)',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: 'balanceOf',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'balanceOf(address,uint256)',
    values: [string, BigNumberish],
  ): string;
  encodeFunctionData(
    functionFragment: 'balanceOfBatch',
    values: [string[], BigNumberish[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'balanceOfBatch(address[],uint256[])',
    values: [string[], BigNumberish[]],
  ): string;
  encodeFunctionData(
    functionFragment: 'isApprovedForAll',
    values: [string, string],
  ): string;
  encodeFunctionData(
    functionFragment: 'isApprovedForAll(address,address)',
    values: [string, string],
  ): string;
  encodeFunctionData(
    functionFragment: 'safeBatchTransferFrom',
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)',
    values: [string, string, BigNumberish[], BigNumberish[], BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'safeTransferFrom',
    values: [string, string, BigNumberish, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'safeTransferFrom(address,address,uint256,uint256,bytes)',
    values: [string, string, BigNumberish, BigNumberish, BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'setApprovalForAll',
    values: [string, boolean],
  ): string;
  encodeFunctionData(
    functionFragment: 'setApprovalForAll(address,bool)',
    values: [string, boolean],
  ): string;
  encodeFunctionData(
    functionFragment: 'supportsInterface',
    values: [BytesLike],
  ): string;
  encodeFunctionData(
    functionFragment: 'supportsInterface(bytes4)',
    values: [BytesLike],
  ): string;

  decodeFunctionResult(functionFragment: 'balanceOf', data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: 'balanceOf(address,uint256)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'balanceOfBatch',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'balanceOfBatch(address[],uint256[])',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isApprovedForAll',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'isApprovedForAll(address,address)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'safeBatchTransferFrom',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'safeTransferFrom',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'safeTransferFrom(address,address,uint256,uint256,bytes)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setApprovalForAll',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'setApprovalForAll(address,bool)',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'supportsInterface',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: 'supportsInterface(bytes4)',
    data: BytesLike,
  ): Result;

  events: {
    'ApprovalForAll(address,address,bool)': EventFragment;
    'TransferBatch(address,address,address,uint256[],uint256[])': EventFragment;
    'TransferSingle(address,address,address,uint256,uint256)': EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: 'ApprovalForAll'): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: 'ApprovalForAll(address,address,bool)',
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TransferBatch'): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: 'TransferBatch(address,address,address,uint256[],uint256[])',
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: 'TransferSingle'): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: 'TransferSingle(address,address,address,uint256,uint256)',
  ): EventFragment;
}

export interface ApprovalForAllEventObject {
  account: string;
  operator: string;
  approved: boolean;
}
export type ApprovalForAllEvent = TypedEvent<
  [string, string, boolean],
  ApprovalForAllEventObject
>;

export type ApprovalForAllEventFilter = TypedEventFilter<ApprovalForAllEvent>;

export interface TransferBatchEventObject {
  operator: string;
  from: string;
  to: string;
  ids: BigNumber[];
  values: BigNumber[];
}
export type TransferBatchEvent = TypedEvent<
  [string, string, string, BigNumber[], BigNumber[]],
  TransferBatchEventObject
>;

export type TransferBatchEventFilter = TypedEventFilter<TransferBatchEvent>;

export interface TransferSingleEventObject {
  operator: string;
  from: string;
  to: string;
  id: BigNumber;
  value: BigNumber;
}
export type TransferSingleEvent = TypedEvent<
  [string, string, string, BigNumber, BigNumber],
  TransferSingleEventObject
>;

export type TransferSingleEventFilter = TypedEventFilter<TransferSingleEvent>;

export interface ERC1155Base extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ERC1155BaseInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined,
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>,
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>,
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    'balanceOf(address,uint256)'(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<[BigNumber]>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]]>;

    'balanceOfBatch(address[],uint256[])'(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<[BigNumber[]]>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    'isApprovedForAll(address,address)'(
      account: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)'(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'safeTransferFrom(address,address,uint256,uint256,bytes)'(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    setApprovalForAll(
      operator: string,
      status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    'setApprovalForAll(address,bool)'(
      operator: string,
      status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;

    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<[boolean]>;
  };

  balanceOf(
    account: string,
    id: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  'balanceOf(address,uint256)'(
    account: string,
    id: BigNumberish,
    overrides?: CallOverrides,
  ): Promise<BigNumber>;

  balanceOfBatch(
    accounts: string[],
    ids: BigNumberish[],
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;

  'balanceOfBatch(address[],uint256[])'(
    accounts: string[],
    ids: BigNumberish[],
    overrides?: CallOverrides,
  ): Promise<BigNumber[]>;

  isApprovedForAll(
    account: string,
    operator: string,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  'isApprovedForAll(address,address)'(
    account: string,
    operator: string,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  safeBatchTransferFrom(
    from: string,
    to: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)'(
    from: string,
    to: string,
    ids: BigNumberish[],
    amounts: BigNumberish[],
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  safeTransferFrom(
    from: string,
    to: string,
    id: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'safeTransferFrom(address,address,uint256,uint256,bytes)'(
    from: string,
    to: string,
    id: BigNumberish,
    amount: BigNumberish,
    data: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  setApprovalForAll(
    operator: string,
    status: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  'setApprovalForAll(address,bool)'(
    operator: string,
    status: boolean,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  supportsInterface(
    interfaceId: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  'supportsInterface(bytes4)'(
    interfaceId: BytesLike,
    overrides?: CallOverrides,
  ): Promise<boolean>;

  callStatic: {
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'balanceOf(address,uint256)'(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;

    'balanceOfBatch(address[],uint256[])'(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<BigNumber[]>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    'isApprovedForAll(address,address)'(
      account: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)'(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    'safeTransferFrom(address,address,uint256,uint256,bytes)'(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    setApprovalForAll(
      operator: string,
      status: boolean,
      overrides?: CallOverrides,
    ): Promise<void>;

    'setApprovalForAll(address,bool)'(
      operator: string,
      status: boolean,
      overrides?: CallOverrides,
    ): Promise<void>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<boolean>;
  };

  filters: {
    'ApprovalForAll(address,address,bool)'(
      account?: string | null,
      operator?: string | null,
      approved?: null,
    ): ApprovalForAllEventFilter;
    ApprovalForAll(
      account?: string | null,
      operator?: string | null,
      approved?: null,
    ): ApprovalForAllEventFilter;

    'TransferBatch(address,address,address,uint256[],uint256[])'(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null,
    ): TransferBatchEventFilter;
    TransferBatch(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      ids?: null,
      values?: null,
    ): TransferBatchEventFilter;

    'TransferSingle(address,address,address,uint256,uint256)'(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null,
    ): TransferSingleEventFilter;
    TransferSingle(
      operator?: string | null,
      from?: string | null,
      to?: string | null,
      id?: null,
      value?: null,
    ): TransferSingleEventFilter;
  };

  estimateGas: {
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'balanceOf(address,uint256)'(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'balanceOfBatch(address[],uint256[])'(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'isApprovedForAll(address,address)'(
      account: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)'(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'safeTransferFrom(address,address,uint256,uint256,bytes)'(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    setApprovalForAll(
      operator: string,
      status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    'setApprovalForAll(address,bool)'(
      operator: string,
      status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;

    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    balanceOf(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'balanceOf(address,uint256)'(
      account: string,
      id: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    balanceOfBatch(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'balanceOfBatch(address[],uint256[])'(
      accounts: string[],
      ids: BigNumberish[],
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    isApprovedForAll(
      account: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'isApprovedForAll(address,address)'(
      account: string,
      operator: string,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    safeBatchTransferFrom(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'safeBatchTransferFrom(address,address,uint256[],uint256[],bytes)'(
      from: string,
      to: string,
      ids: BigNumberish[],
      amounts: BigNumberish[],
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    safeTransferFrom(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'safeTransferFrom(address,address,uint256,uint256,bytes)'(
      from: string,
      to: string,
      id: BigNumberish,
      amount: BigNumberish,
      data: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    setApprovalForAll(
      operator: string,
      status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    'setApprovalForAll(address,bool)'(
      operator: string,
      status: boolean,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    supportsInterface(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    'supportsInterface(bytes4)'(
      interfaceId: BytesLike,
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;
  };
}
