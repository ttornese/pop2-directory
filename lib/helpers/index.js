import Backseat from '../../client/components/shared/svgs/Backseat';
import Delicious from '../../client/components/shared/svgs/Delicious';
import Femmebot from '../../client/components/shared/svgs/Femmebot';
import IGotIt from '../../client/components/shared/svgs/IGotIt';
import Lucky from '../../client/components/shared/svgs/Lucky';
import OutOfMyHead from '../../client/components/shared/svgs/OutOfMyHead';
import Porsche from '../../client/components/shared/svgs/Porsche';
import Tears from '../../client/components/shared/svgs/Tears';
import Track10 from '../../client/components/shared/svgs/Track10';
import UnlockIt from '../../client/components/shared/svgs/UnlockIt';

const helpers = {
  tracks: {
    getSvg: track => (helpers.tracks.svgs[track.split(' ').join('')]),
    svgs: {
      Backseat,
      Delicious,
      Femmebot,
      IGotIt,
      Lucky,
      OutOfMyHead,
      Porsche,
      Tears,
      Track10,
      UnlockIt,
    },
  },
};

export default helpers;
