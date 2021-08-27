const UPSTREAM_STATS_URL = 'https://plutonium.pw/api/stats';

export const getStats = async () => await fetch(UPSTREAM_STATS_URL).then((resp) => resp.json());

const handler = async (req, res) => {
    res.status(200).json(await getStats());
};
export default handler;
