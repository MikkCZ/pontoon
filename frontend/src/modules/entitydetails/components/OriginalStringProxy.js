/* @flow */

import * as React from 'react';

import { FluentOriginalString } from 'modules/fluentoriginal';

import GenericOriginalString from './GenericOriginalString';

import type { Entity } from 'core/api';
import type { Locale } from 'core/locales';


type Props = {|
    +entity: Entity,
    +locale: Locale,
    +pluralForm: number,
    +handleClickOnPlaceable: (SyntheticMouseEvent<HTMLParagraphElement>) => void,
|};


/**
 * Proxy for an OriginalString component based on the format of the entity.
 *
 * For Fluent strings ('ftl'), returns a Fluent-specific OriginalString
 * component. For everything else, return a generic OriginalString component.
 */
export default function OriginalStringProxy(props: Props) {
    if (props.entity.format === 'ftl') {
        return <FluentOriginalString
            entity={ props.entity }
            handleClickOnPlaceable={ props.handleClickOnPlaceable }
        />;
    }

    return <GenericOriginalString
        entity={ props.entity }
        locale={ props.locale }
        pluralForm={ props.pluralForm }
        handleClickOnPlaceable={ props.handleClickOnPlaceable }
    />;
}