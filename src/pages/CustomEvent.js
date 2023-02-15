export default function customEvent(url) {
    return new CustomEvent("onstatechange", { detail: { url: url } })
}