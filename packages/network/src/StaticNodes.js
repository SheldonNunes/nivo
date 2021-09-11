/*
 * This file is part of the nivo project.
 *
 * Copyright 2016-present, Raphaël Benitte.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
import { memo } from 'react'
import PropTypes from 'prop-types'
import React from 'react'

const StaticNodes = ({ nodes, color, borderColor, nodeComponent, ...props }) => {
    return nodes.map(node => {
        return React.createElement(nodeComponent, {
            key: node.id,
            node,
            x: node.x,
            y: node.y,
            radius: node.radius,
            color: color(node),
            borderColor: borderColor(node),
            ...props,
        })
    })
}

StaticNodes.propTypes = {
    nodes: PropTypes.array.isRequired,
    color: PropTypes.func.isRequired,
    borderWidth: PropTypes.number.isRequired,
    borderColor: PropTypes.func.isRequired,
    handleNodeHover: PropTypes.func.isRequired,
    handleNodeLeave: PropTypes.func.isRequired,
    nodeComponent: PropTypes.func.isRequired,
}

export default memo(StaticNodes)
