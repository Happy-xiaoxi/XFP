;
;
export function Eb() {
    var a = null, b = null;
    try {
        a = new AudioContext(), b = a.createAnalyser(), e('ac-base-latency', a.baseLatency), e('ac-output-latency', a.outputLatency), e('ac-sample-rate', a.sampleRate), e('ac-state', a.state), e('ac-max-channel-count', a.destination.maxChannelCount), e('ac-number-of-inputs', a.destination.numberOfInputs), e('ac-number-of-outputs', a.destination.numberOfOutputs), e('ac-channel-count', a.destination.channelCount), e('ac-channel-count-mode', a.destination.channelCountMode), e('ac-channel-interpretation', a.destination.channelInterpretation), e('ac-fft-size', b.fftSize), e('ac-frequency-bin-count', b.frequencyBinCount), e('ac-min-decibels', b.minDecibels), e('ac-max-decibels', b.maxDecibels), e('ac-smoothing-time-constant', b.smoothingTimeConstant), Kb();
    } catch (c) {
        k(c);
    } finally {
        null !== b && b.disconnect(), null !== a && a.close();
    }
}