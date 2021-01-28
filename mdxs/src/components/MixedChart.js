import React, { PureComponent } from 'react';
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar, Line,  ResponsiveContainer } from 'recharts'

class MixedChart extends PureComponent {
    render() {
    return (
        <div style={{ width: '100%', height: 350 }}>
        <ResponsiveContainer>
        <ComposedChart data={this.props.data}>
            <XAxis dataKey="time" />
            <YAxis yAxisId={1} orientation="right" />
            <YAxis yAxisId={2} />
            <Tooltip />
            <Legend />
            <CartesianGrid stroke="#f5f5f5" />
            <Bar yAxisId={1} dataKey="rain" barSize={40} fill="#413ea0" />
            <Line yAxisId={2} type="monotone" dataKey="temp" stroke="#ff0000" />
        </ComposedChart>
        </ResponsiveContainer>
        </div>
        );
    }
};

export default MixedChart;