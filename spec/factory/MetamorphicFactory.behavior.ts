import { describeBehaviorOfFactory } from './Factory.behavior';
import { describeFilter } from '@solidstate/library';
import { MetamorphicFactory } from '@solidstate/typechain-types';
import { expect } from 'chai';
import { ethers } from 'hardhat';

export interface MetaphoricFactoryBehaviorArgs {
  deploy: () => Promise<MetamorphicFactory>;
}

export function describeBehaviorOfMetamorphicFactory(
  { deploy }: MetaphoricFactoryBehaviorArgs,
  skips?: string[],
) {
  const describe = describeFilter(skips);

  describe('::MetamorphicFactory', function () {
    let instance: MetamorphicFactory;

    beforeEach(async function () {
      instance = await deploy();
    });

    describeBehaviorOfFactory({}, skips);

    describe('#getMetamorphicImplementation()', function () {
      // behavior changes during internal call but cannot be tested independently
      it('returns zero address', async function () {
        expect(
          await instance.callStatic['getMetamorphicImplementation()'](),
        ).to.equal(ethers.constants.AddressZero);
      });
    });
  });
}
