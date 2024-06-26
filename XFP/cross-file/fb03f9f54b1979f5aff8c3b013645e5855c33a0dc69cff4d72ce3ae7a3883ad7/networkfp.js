import { network_push_part } from "./network_push_part";
export function fingerprint_network(){
    var net_arr = new Array();

    conn = navigator.connection;
    net_arr.push(conn.downlink,
    conn.downlinkMax,
    conn.effectiveType,
    conn.onchange,
    // conn.rtt,
    // conn.saveData,
    // conn.type
    );
    net_arr = network_push_part(net_arr)
    return net_arr;
}