import type { ModalComponent } from "@skeletonlabs/skeleton";
import { AdminLiveStreamAction, LiveStreamForm, ProfileCoverChange } from "$lib/components";

const modalComponentRegistry: Record<string, ModalComponent> = {
  profileCoverChange: {
    ref: ProfileCoverChange,
    slot: '<p id="profileCoverChange">Modal</p>',
  },
  adminLiveSreamAction: {
    ref: AdminLiveStreamAction,
    slot: '<p id="adminLiveSreamAction">Modal</p>'
  },
  newLiveSream: {
    ref: LiveStreamForm,
    slot: '<p id="newLiveSream">Modal</p>'
  }
};

export default modalComponentRegistry;
