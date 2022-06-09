/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  UpgradeableProxyMock,
  UpgradeableProxyMockInterface,
} from '../../../proxy/upgradeable/UpgradeableProxyMock';
import type { Provider, TransactionRequest } from '@ethersproject/providers';
import { Signer, utils, Contract, ContractFactory, Overrides } from 'ethers';

const _abi = [
  {
    inputs: [
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    stateMutability: 'payable',
    type: 'fallback',
  },
  {
    inputs: [],
    name: '__getImplementation',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'implementation',
        type: 'address',
      },
    ],
    name: '__setImplementation',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
];

const _bytecode =
  '0x608060405234801561001057600080fd5b5060405161033038038061033083398101604081905261002f916100aa565b6100388161003e565b506100da565b6100668161005461006960201b61018e1760201c565b61008d60201b6101b21790919060201c565b50565b7ff7f483ff1916e63c14790f9c8bd1f715e1ffa6a089843b606bbc96607229b80490565b81546001600160a01b0319166001600160a01b0391909116179055565b6000602082840312156100bc57600080fd5b81516001600160a01b03811681146100d357600080fd5b9392505050565b610247806100e96000396000f3fe60806040526004361061002d5760003560e01c806322bc91e3146100f7578063d433c57e1461011957610034565b3661003457005b60006100677ff7f483ff1916e63c14790f9c8bd1f715e1ffa6a089843b606bbc96607229b804546001600160a01b031690565b90506001600160a01b0381163b6100d35760405162461bcd60e51b815260206004820152602660248201527f50726f78793a20696d706c656d656e746174696f6e206d75737420626520636f6044820152651b9d1c9858dd60d21b606482015260840160405180910390fd5b3660008037600080366000845af43d6000803e8080156100f2573d6000f35b3d6000fd5b34801561010357600080fd5b506101176101123660046101e1565b61014a565b005b34801561012557600080fd5b5061012e610156565b6040516001600160a01b03909116815260200160405180910390f35b610153816101cf565b50565b60006101897ff7f483ff1916e63c14790f9c8bd1f715e1ffa6a089843b606bbc96607229b804546001600160a01b031690565b905090565b7ff7f483ff1916e63c14790f9c8bd1f715e1ffa6a089843b606bbc96607229b80490565b81546001600160a01b0319166001600160a01b0391909116179055565b610153816101db61018e565b906101b2565b6000602082840312156101f357600080fd5b81356001600160a01b038116811461020a57600080fd5b939250505056fea264697066735822122045669237e3a6d64cc36cab04b7c5fce1eb252471cbad793e31d4e128c7c187a264736f6c634300080a0033';

type UpgradeableProxyMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UpgradeableProxyMockConstructorParams,
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UpgradeableProxyMock__factory extends ContractFactory {
  constructor(...args: UpgradeableProxyMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    implementation: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): Promise<UpgradeableProxyMock> {
    return super.deploy(
      implementation,
      overrides || {},
    ) as Promise<UpgradeableProxyMock>;
  }
  override getDeployTransaction(
    implementation: string,
    overrides?: Overrides & { from?: string | Promise<string> },
  ): TransactionRequest {
    return super.getDeployTransaction(implementation, overrides || {});
  }
  override attach(address: string): UpgradeableProxyMock {
    return super.attach(address) as UpgradeableProxyMock;
  }
  override connect(signer: Signer): UpgradeableProxyMock__factory {
    return super.connect(signer) as UpgradeableProxyMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradeableProxyMockInterface {
    return new utils.Interface(_abi) as UpgradeableProxyMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider,
  ): UpgradeableProxyMock {
    return new Contract(
      address,
      _abi,
      signerOrProvider,
    ) as UpgradeableProxyMock;
  }
}
