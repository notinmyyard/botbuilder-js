/**
 * @module botbuilder-dialogs-adaptive
 */
/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
import { Dialog } from 'botbuilder-dialogs';
import { OnDialogEvent } from './onDialogEvent';
import { AdaptiveEvents } from '../sequenceContext';

/**
 * Actions triggered when a dialog is started via BeginDialog().
 */
export class OnBeginDialog extends OnDialogEvent {

    public static declarativeType = 'Microsoft.OnBeginDialog';

    public constructor(actions: Dialog[] = [], condition?: string) {
        super(AdaptiveEvents.beginDialog, actions, condition);
    }
}