/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from '../../common';
import type { FunctionFragment, Result } from '@ethersproject/abi';
import type { Listener, Provider } from '@ethersproject/providers';
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers';

export interface UpgradeableProxyMockInterface extends utils.Interface {
  functions: {
    '__getImplementation()': FunctionFragment;
    '__setImplementation(address)': FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | '__getImplementation'
      | '__getImplementation()'
      | '__setImplementation'
      | '__setImplementation(address)',
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: '__getImplementation',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: '__getImplementation()',
    values?: undefined,
  ): string;
  encodeFunctionData(
    functionFragment: '__setImplementation',
    values: [string],
  ): string;
  encodeFunctionData(
    functionFragment: '__setImplementation(address)',
    values: [string],
  ): string;

  decodeFunctionResult(
    functionFragment: '__getImplementation',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: '__getImplementation()',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: '__setImplementation',
    data: BytesLike,
  ): Result;
  decodeFunctionResult(
    functionFragment: '__setImplementation(address)',
    data: BytesLike,
  ): Result;

  events: {};
}

export interface UpgradeableProxyMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: UpgradeableProxyMockInterface;

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
    __getImplementation(overrides?: CallOverrides): Promise<[string]>;

    '__getImplementation()'(overrides?: CallOverrides): Promise<[string]>;

    __setImplementation(
      implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;

    '__setImplementation(address)'(
      implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<ContractTransaction>;
  };

  __getImplementation(overrides?: CallOverrides): Promise<string>;

  '__getImplementation()'(overrides?: CallOverrides): Promise<string>;

  __setImplementation(
    implementation: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  '__setImplementation(address)'(
    implementation: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<ContractTransaction>;

  callStatic: {
    __getImplementation(overrides?: CallOverrides): Promise<string>;

    '__getImplementation()'(overrides?: CallOverrides): Promise<string>;

    __setImplementation(
      implementation: string,
      overrides?: CallOverrides,
    ): Promise<void>;

    '__setImplementation(address)'(
      implementation: string,
      overrides?: CallOverrides,
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    __getImplementation(overrides?: CallOverrides): Promise<BigNumber>;

    '__getImplementation()'(overrides?: CallOverrides): Promise<BigNumber>;

    __setImplementation(
      implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;

    '__setImplementation(address)'(
      implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    __getImplementation(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    '__getImplementation()'(
      overrides?: CallOverrides,
    ): Promise<PopulatedTransaction>;

    __setImplementation(
      implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;

    '__setImplementation(address)'(
      implementation: string,
      overrides?: Overrides & { from?: string | Promise<string> },
    ): Promise<PopulatedTransaction>;
  };
}
