const drive = {
    "allw": "all wheel drive",
    "fw": "front-wheel drive",
    "rw": "rear drive",
}

export default function driveDecroder(idx) {
    return drive[idx]
}